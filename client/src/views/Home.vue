<template>
  <div class="wrapper">
    <div class="container">
      <section class="hero">
        <div class="hero-body">
          <div class="is-flex is-undeline rm_padding">
            <h1 class="title is-2 course_title">
              All Course
            </h1>
            <input class="input is-primary" type="text" placeholder="Search">
            <a class="button is-primary search_button">Search</a>
          </div>
          <CourseComponent :courseItem="course"/>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CourseComponent from '@/components/Course.vue'
import Course from "../mock_data/course.js";
export default {
  name: "home",
  components: {
    CourseComponent
  },
  data() {
    return {
      course: []
    };
  },
  created() {
    this.course = Course.courseDetail;
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
