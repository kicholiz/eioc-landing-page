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
                <!--
                    <div class="contact-right">
                        <img class="house" :src="require('@/images/house.jpg')" alt="Events" />
                    </div>
                -->
            </div>

        </div>
        <div class="column column-right">
            <h2 class="appointment">Get A Quote</h2>
            <Form class="form" v-slot="{ errors }" @submit="submitEvent" :validation-schema="schema">
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
                        <Datepicker class="form-fields" name="eventDate" :lowerLimit="todayDate" v-model="eventDate" />
                        <Field class="hidden" v-model="eventDate" name="eventDate" />
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-input-group">
                        <label for="budget">Estimated Budget*</label>
                        <Field class="form-fields" v-model="budget" name="budget" placeholder="₦5000" />
                    </div>
                    <div class="form-input-group">
                        <label for="guestCount">Guest Count*</label>
                        <Field class="form-fields" v-model="guestCount" name="guestCount" placeholder="200" />
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-input-group">
                        <label for="aboutEvent">Tell Us About Your Event*</label>
                        <Field as="textarea" name="aboutEvent" rows="6" class="form-fields full-width" v-model="aboutEvent" placeholder="Tell us about who you are, describe the event, and give as much details of the event venue. We will get back to you as soon as we can!" />
                    </div>
                </div>
                <template v-if="Object.keys(errors).length || errorMessage">
                    <p class="text">{{errorMessage}}</p>
                    <ul class="errors">
                        <li class="text" v-for="(message, field) in errors" :key="field">
                            {{ message }}
                        </li>
                    </ul>
                </template>
                <div class="full-width align-right" v-if="!isEventSubmitted">
                    <div class="spacing"></div>
                    <button class="btn" type="submit"><span>Confirm Booking</span></button>
                </div>

                <!--if event is submitted-->
                <div class="submittedForm" v-if="isEventSubmitted">
                    <h2 class="appointment">Form submitted!</h2>
                    <p class="text">A member of our team will reach out to you soon.</p>
                </div>

            </Form>
        </div>
    </div>
</template>

<script>
    import { reactive, ref, toRefs } from "vue";
    import Datepicker from 'vue3-datepicker';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import { configure, Form, Field } from 'vee-validate';
    import * as yup from 'yup';
    configure({
        validateOnBlur: true,
        validateOnChange: true,
        validateOnInput: false,
        validateOnModelUpdate: true,
    });
    export default {
        components: {
            Datepicker,
            FontAwesomeIcon,
            Form,
            Field
        },
        setup() {
            //reactive
            const todayDate = ref(new Date());
            const errorMessage = "";
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

            const eventTypes = ref([{
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
            }]);

            const schema = yup.object().shape({
                name: yup.string().required("Please enter Full Name"),
                organisation: yup.string().matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed in Organisation Name").notRequired(),
                email: yup.string().required("Please enter Email").email("Wrong format in Email"),
                phone: yup.number("Only digits are allowed in Phone").notRequired(),
                eventType: yup.string().required("Please choose an Event Type"),
                eventDate: yup.date().min(new Date(), "Please choose a later date.").required(),
                budget: yup.string().required("Please enter your Budget"),
                guestCount: yup.number().positive("Please enter a number in Guest Count").required("Please enter Guest Count of event"),
                aboutEvent: yup.string().required("Please tell us more about your event!")
            });

            const isEventSubmitted = ref(false);

            const registerUser = () => {
                fetch("/.netlify/functions/register", {
                    method: "POST",
                    body: JSON.stringify(formData),
                })
                    .then((response) => response.json())
                    .then((body) => {
                        console.log(body);
                    });
            };

            //submit form
            const submitEvent = () => {
                fetch("/.netlify/functions/submit", {
                    method: "POST",
                    body: JSON.stringify(formData),
                }).then((response) => response.json()).then((body) => {
                    console.log(body);
                    isEventSubmitted.value = true;
                })
            }

            return {
                schema,
                errorMessage,
                todayDate,
                eventTypes,
                ...toRefs(formData),
                isEventSubmitted,
                registerUser,
                submitEvent
            }
        },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    @import '../style.css';
</style>
