<template>
    <div class="wrapper">
        <div class="container">
            <section class="hero">
                <div class="hero-body">
                    <div class="is-undeline is-flex rm_padding">
                        <h1 class="title is-2 course_title">
                            Create Course
                        </h1>
                    </div>
                    <div class="field">
                        <label class="label title is-4">Course Name</label>
                        <div class="control">
                            <input class="input" type="text" placeholder="How to read like a pro">
                        </div>
                    </div>
                    <div class="field">
                        <label class="label title is-4">Course Description</label>
                        <div class="control">
                            <textarea class="textarea" placeholder="Textarea"></textarea>
                        </div>
                    </div>
                    <div class="columns">
                        <div class="column is-2">
                            <div class="field">
                                <label class="label title is-4">Category</label>
                                <div class="control">
                                    <div class="select">
                                    <select>
                                        <option>Select Category</option>
                                        <option>Web Development</option>
                                        <option>Data & Analytics</option>
                                    </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="column is-2">
                            <div class="field">
                                <label class="label title is-4">Start Date</label>
                                <datepicker placeholder="European Format ('d-m-Y')" :config="{ dateFormat: 'd-m-Y', static: true }"></datepicker>
                            </div>
                        </div>
                        <div class="column is-2">
                            <div class="field">
                                <label class="label title is-4">End Date</label>
                                <datepicker placeholder="European Format ('d-m-Y')" :config="{ dateFormat: 'd-m-Y', static: true }"></datepicker>
                            </div>
                        </div>
                        <div class="column is-3">
                            <div class="field">
                                <label class="label title is-4">Number of students</label>
                                <input class="input" type="text" placeholder="How to read like a pro">
                            </div>
                        </div>
                    </div>
                    <a class="button is-primary">Create</a>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
    import Datepicker from 'vue-bulma-datepicker'

    export default{
        components:{
            Datepicker
        }
    }
</script>



<style  scoped>
    .is-flex{
        margin-bottom: 20px;
    }
</style>
