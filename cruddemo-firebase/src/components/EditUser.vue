<template>
    <div class="row justify-content-center">
        <div class="col-md-5">
            <h3 class="text-center">Update User</h3>
            <form @submit.prevent="onUpdateForm">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="user.name" required>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" v-model="user.email" required>
                </div>
                <div class="form-group">
                    <label>Phone</label>
                    <input type="text" class="form-control" v-model="user.phone" required>
                </div>
                <div class="form-group">
                    <button class="btn btn-primary btn-block">Update User</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
    import { db } from '../firebaseInit';
    import swal from 'sweetalert';
    export default {
        data() {
            return {
                user: {
                    name:'',
                    email:'',
                    phone:''
                }
            }
        },
        created() {
            let dbRef = db.collection('users').doc(this.$route.params.id);
            dbRef.get().then((doc) => {
                this.user = doc.data();
            }).catch((error) => {
                console.log(error)
            })
        },
        methods: {
            onUpdateForm(event) {
                event.preventDefault()
                db.collection('users').doc(this.$route.params.id)
                .update(this.user).then(() => {
                    swal("Updated!", "Record is Updated!", "success");
                    console.log("User successfully updated!");
                     this.$router.push({
                    name: 'ListUser'
                })
                }).catch((error) => {
                    console.log(error);
                });
            }
        }
    }
</script>