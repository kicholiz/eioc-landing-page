<template>
    <div class="container">
        <div class="column column-left">
            <img class="logo" :src="require('@/images/ElizabethLogo_cropped.svg')" alt="Elizabeth Ojo Igbinoba Events Centre" />
            <h1 class="align-left orange-yellow">For your <b>social engagement</b>.</h1>
            <ul class="align-left">
                <li>Weddings</li>
                <li>Birthdays</li>
                <li>Sport Carnivals</li>
                <li>Corporate Gatherings</li>
                <li>Team Building Activities</li>
            </ul>
            <div class="spacing"></div>
            <div class="contact">
                <div class="contact-left">
                    <h2 class="orange-yellow">Contact us</h2>
                    <ul>
                        <li><font-awesome-icon :icon="['fas', 'envelope']" /> booking@eoic.ng</li>
                        <li><font-awesome-icon :icon="['fas', 'phone']" /> 08131286186</li>
                        <li><font-awesome-icon :icon="['fas', 'phone']" /> 08108127209</li>
                    </ul>
                </div>
                <div class="contact-right">
                    <img class="house" :src="require('@/images/house.jpg')" alt="Events" />
                </div>
            </div>

        </div>
        <div class="column column-right">
            <h2 class="appointment">Get A Quote</h2>
            <Form class="form">
                <div class="form-row">
                    <div class="form-input-group">
                        <label for="name">Full Name*</label>
                        <Field type="text" name="name" class="form-fields" v-model="name" placeholder="Piet Pompies" />
                    </div>

                    <div class="form-input-group">
                        <label for="name">Organisation Name</label>
                        <Field type="text" name="organisation" class="form-fields" v-model="organisation" placeholder="Piet Group" />
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-input-group">
                        <label for="email">Email*</label>
                        <Field type="email" name="email" class="form-fields" v-model="email" placeholder="PietPompies@email.com" />
                    </div>

                    <div class="form-input-group">
                        <label for="phone">Phone</label>
                        <Field type="tel" name="phone" class="form-fields" v-model="phone" placeholder="08033965746" />
                    </div>
                </div>

                <div class="form-row">
                    <div class="form-input-group">
                        <label for="eventType">Event Type*</label>
                        <Field class="form-fields" v-model="eventType" name="eventType" as="select">
                            <option value="" disabled>Select event type</option>
                            <option v-for="option in eventTypes" v-bind:key="option.value">{{option.value}}</option>
                        </Field>
                    </div>
                    <div class="form-input-group">
                        <label for="eventDate">Event Date*</label>
                        <Datepicker class="form-fields" :lowerLimit="todayDate" v-model="eventDate" />
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-input-group">
                        <label for="budget">Estimated Budget</label>
                        <Field class="form-fields" v-model="budget" name="budget" placeholder="₦5000" />
                    </div>
                    <div class="form-input-group">
                        <label for="guestCount">Guest Count</label>
                        <Field class="form-fields" v-model="guestCount" name="guestCount" placeholder="200" />
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-input-group">
                        <label for="aboutEvent">Tell Us About Your Event*</label>
                        <textarea type="text" id="aboutEvent" rows="6" class="form-fields full-width" v-model="aboutEvent" placeholder="Tell us about who you are, describe the event, and give as much details of the event venue. We will get back to you as soon as we can!" />
                    </div>
                </div>
                <div class="spacing"></div>
                <div class="full-width align-right">
                    <button class="btn" type="submit"><span>Confirm Booking</span></button>
                </div>
            </Form>
        </div>
    </div>

</template>

<script>
    import { reactive, ref, toRefs } from "vue";
    import Datepicker from 'vue3-datepicker';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import { Form, Field } from 'vee-validate';
    export default {
        components: {
            Datepicker,
            FontAwesomeIcon,
            Form,
            Field,
        },
        data() {
            return {
                eventTypes: [{
                    "value": "Weddings",
                }, {
                "value": "Birthdays",
                }, {
                "value": "Sport Carnivals",
                }, {
                "value": "Corporate Gatherings"
            }, {
                "value": "Team Building Activities"
            }, {
                "value": "Other"
                    }],
            }
        },
        setup() {
            //reactive
            const todayDate = ref(new Date());
            const formData = reactive({
                name: "",
                organisation: "",
                email: "",
                phone: "",
                eventType: "",
                eventDate: ref(new Date()),
                budget: "",
                guestCount: "",
                aboutEvent: "",
            });
            return {
                todayDate,
                ...toRefs(formData),
                hover: false
            }
        },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    @import '../style.css';
</style>
