<template>
    <div class="columns is-multiline">
        <div class="column is-3" v-for="(item,index) in courseItem" :key="item+index"> 
            <div class="card">
                <div class="card-image">
                    <figure class="image is-4by3">
                    <img src="../assets/Book.png" alt="Placeholder image">
                    </figure>
                </div>
                <div class="card-content">
                    <p class="course_title">{{excerptText(item.CourseName)}}</p>
                    <p class="course_instructor">{{item.FullName}}</p>
                </div>
                <div class="card-footer is-flex">
                    <div class="start_end_date">
                    <p class="is_bold">Start date to End date</p>
                    <p class="is_text_right">{{ymdFormat(item.CourseStartTime)}} to {{ymdFormat(item.CourseEndTime)}}</p>
                    </div>
                    <div class="number_of_student">
                    <p class="is_bold">Max</p>
                    <p class="is_text_right">{{item.NumberOfStudent}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import util from "../utility/cutText";
import ymdFormat from "../utility/dateFormat";

export default {
  props: ["courseItem"],
  methods: {
    excerptText: util.cutText,
    ymdFormat: ymdFormat.ymdFormat
  }
};
</script>

<style>
.card-content {
  padding: 0.5rem 1rem 0.5rem 1rem !important;
}
.course_title {
  font-size: 18px;
  margin-bottom: 8px;
  font-weight: bold;
}
.course_instructor {
  color: #95a5a6;
}
.is-flex {
  padding: 0.5rem 1rem 0.5rem 1rem;
  justify-content: space-between;
}
.card-footer {
  color: #2c3e50;
  font-size: 14px;
}
img {
  object-fit: contain;
}
</style>
