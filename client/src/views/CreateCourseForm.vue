<template>
    <div class="wrapper"> 
        <div class="container">
            <section class="hero" v-if="userPermission[0].RoleID === 2">
                <div class="hero-body">
                    <div class="is-undeline is-flex rm_padding mr_bot">
                        <h1 class="title is-2 course_title">
                            Create Course
                        </h1>
                    </div>
                    <div class="field">
                        <label class="label title is-4">Course Name</label>
                        <div class="control">
                            <input class="input" type="text" v-model="courseObj.courseName" placeholder="How to read like a pro">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label title is-4">Course Description</label>
                        <div class="control">
                            <textarea class="textarea" v-model="courseObj.courseDescription" placeholder="Textarea"></textarea>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column is-2">
                            <div class="field">
                                <label class="label title is-4">Category</label>
                                <div class="control">
                                    <div class="select">
                                    <select v-model="courseObj.category">
                                        <option>Select Category</option>
                                        <option v-for="(item, index) in categoryDropdown" :key="item+index" :value="item.CategoryID">
                                            {{item.CategoryName}}
                                        </option>
                                    </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="column is-2">
                            <div class="field">
                                <label class="label title is-4">Start Date</label>
                                <datepicker input-class='input' v-model="courseObj.startDate" placeholder="2018-11-25" format="yyyy-MM-dd"></datepicker>
                            </div>
                        </div>
                        <div class="column is-2">
                            <div class="field">
                                <label class="label title is-4">End Date</label>
                                <datepicker input-class='input' v-model="courseObj.endDate" placeholder="2018-11-26"  format="yyyy-MM-dd"></datepicker>
                            </div>
                        </div>
                        <div class="column is-3">
                            <div class="field">
                                <label class="label title is-4">Number of students</label>
                                <input class="input" type="number" v-model="courseObj.numberOfStudent"  placeholder="50">
                            </div>
                        </div>
                    </div>
                    <div class="field">
                        <label class="label title is-4">Subject</label>
                        <div class="control is-flex rm_padding mr_bot" v-for="(item, index) in courseObj.subject" :key="item+index">
                            <div class="flexAuto mr_right">
                                <input class="input" type="text" v-model="item.subjectName" placeholder="Stop spelling">
                            </div>
                            <div :class="[index === 0 ? null : 'mr_right' ]">
                                <a class="button is-primary" @click="addSubject()">Add</a>
                            </div>
                            <div v-if="index > 0">
                                <a class="button is-danger" @click="removeSubject(index)">Remove</a>
                            </div>
                        </div>
                    </div>
                    <a class="button is-primary" @click="createCourse">Create course</a>
                </div>
            </section>
            <section v-else>
                <p class="title is-1 alertText">
                    You can not view this section
                </p>
            </section>
        </div>
    </div>
</template>

<script>
import Datepicker from "vuejs-datepicker";
import { mapState } from "vuex";
import moment from "moment";
export default {
  data() {
    return {
      categoryDropdown: [],
      courseObj: {
        courseName: "",
        courseDescription: "",
        subject: [
          {
            subjectName: ""
          }
        ],
        category: "Select Category",
        startDate: moment().format("YYYY-MM-DD"),
        endDate: moment().format("YYYY-MM-DD"),
        numberOfStudent: 0
      }
    };
  },
  components: {
    Datepicker
  },
  created() {
    this.$store.dispatch("getCategory");
  },
  methods: {
    createCourse() {
      this.courseObj.startDate = moment(this.courseObj.startDate).format(
        "YYYY-MM-DD"
      );
      this.courseObj.endDate = moment(this.courseObj.endDate).format(
        "YYYY-MM-DD"
      );
      const creatObj = {
        creator: this.userPermission[0].Username,
        courseObj: this.courseObj
      };
      this.$store.dispatch("createCourse", creatObj);
    },
    addSubject() {
      this.courseObj.subject.push({
        subjectName: ""
      });
    },
    removeSubject(index) {
      this.courseObj.subject.splice(index, 1);
    }
  },
  computed: mapState({
    userPermission: state => state.userObj,
    category: state => state.category
  }),
  watch: {
    category() {
      this.categoryDropdown = this.category;
    }
  }
};
</script>



<style  scoped>
.flexAuto {
  flex: auto;
}
</style>
