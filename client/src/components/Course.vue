<template>
    <div class="columns is-multiline">
        <div class="column is-3" v-for="(item,index) in courseItem" :key="item+index"> 
            <div class="card">
                <div class="card-image">
                    <figure class="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                    </figure>
                </div>
                <div class="card-content">
                    <p class="course_title">{{excerptText(item.CourseName)}}</p>
                    <p class="course_instructor">{{item.instructor}}</p>
                </div>
                <div class="card-footer is-flex">
                    <div class="start_end_date">
                    <p class="is_bold">Start date to End date</p>
                    <p class="is_text_right">{{item.startTime}} to {{item.endTime}}</p>
                    </div>
                    <div class="number_of_student">
                    <p class="is_bold">Max</p>
                    <p class="is_text_right">{{item.numberOfStudent}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import util from '../utility/cutText'
    export default {
        props: ['courseItem'],
        methods: {
            excerptText: util.cutText
        }
    }
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
</style>
