<template>
  <div class="wrapper">
    <div class="container">
      <section class="hero">
        <div class="hero-body">
          <div class="is-flex is-undeline rm_padding">
            <h1 class="title is-2 course_title">
              All Course
            </h1>
          </div>
          <div class="is-flex rm_padding">
              <div class="mr_right">
                <datepicker class="mr_right" v-model="startDate" placeholder="วันเริ่มต้น" :config="{ dateFormat: 'Y-m-d', static: true }"></datepicker>
              </div>
              <div class="mr_right">
                <datepicker class="mr_right" v-model="endDate" placeholder="วันสิ้นสุด" :config="{ dateFormat: 'Y-m-d', static: true }"></datepicker>
              </div>
              <input class="input is-primary" type="text" placeholder="Search" v-model="searchName">
              <a class="button is-primary mr_left" @click="searchCourse">Search</a>
          </div>
          <CourseComponent :courseItem="courseData"/>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CourseComponent from '@/components/Course.vue'
import Course from "../mock_data/course.js";
import Datepicker from 'vue-bulma-datepicker'
import { mapState } from 'vuex'

export default {
  name: "home",
  components: {
    CourseComponent,
    Datepicker
  },
  data() {
    return {
      courseData: [],
      searchName: '',
      startDate: '',
      endDate: ''
    };
  },
  methods: {
    searchCourse(){
      const criteria = {
        courseName: this.searchName,
        startDate: this.startDate,
        endDate: this.endDate
      }
      this.$store.dispatch('searchCoruse', criteria)
    }
  },
  created() {
    this.$store.dispatch('getCourse')
  },
  computed: mapState({
    course: state => state.courseResult
  }),
  watch: {
    course(val){
      this.courseData = this.course
    }
  }
};
</script>


<style scoped>
.wrapper {
  margin-top: 20px;
}

.is-flex {
  margin-bottom: 20px;
}
.course_title {
  flex-basis: 300px;
  margin-bottom: 0px !important;
}
.search_button {
  margin-left: 10px;
}


</style>
