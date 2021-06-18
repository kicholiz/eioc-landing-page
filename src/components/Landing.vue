import { library } from '@fortawesome/fontawesome-svg-core';

<template>
    <div class="container">
        <div class="column column-left">
            <img class="logo" :src="require('@/images/ElizabethLogo.svg')" alt="Elizabeth Ojo Igbinoba Events Centre" />
            <h1 class="align-left orange-yellow">For your social engagement.</h1>
            <ul class="align-left">
                <li>Wedding Reception</li>
                <li>Birthday</li>
                <li>Sports Carnival</li>
                <li>General Events</li>
            </ul>
            <div class="spacing"></div>
            <div class="contact">
                <h2 class="orange-yellow">Contact us</h2>
                <ul>
                    <li><font-awesome-icon :icon="envelope" />booking@eoic.ng</li>
                    <li>08131286186</li>
                    <li>08108127209</li>
                </ul>
            </div>
        </div>
        <div class="column column-right">
            <h2 class="appointment">Book An Appointment</h2>
            <form class="form">
                <div class="form-input-group">
                    <label for="name">Name*</label>
                    <input type="text" id="name" class="form-fields" v-model="name" placeholder="Piet Pompies" />
                </div>

                <div class="form-input-group">
                    <label for="email">Email*</label>
                    <input type="email" id="email" class="form-fields" v-model="email" placeholder="PietPompies@email.com" />
                </div>

                <div class="form-input-group">
                    <label for="phone">Phone</label>
                    <input type="tel" id="phone" class="form-fields" v-model="phone" placeholder="08033965746" />
                </div>

                <div class="form-input-group">
                    <label for="message">Message*</label>
                    <textarea type="text" id="message" rows="8" class="form-fields" v-model="message" placeholder="Tell us about who you are and the event you are hosting. We will get back to you as soon as we can!" />
                </div>

                <div class="spacing"></div>
                <button class="btn" type="submit"><span>Confirm Booking</span></button>
            </form>
        </div>
    </div>

</template>

<script>
    import { reactive, toRefs } from "vue";
    export default {
        setup() {
            //reactive
            const formData = reactive({
                name: "",
                email: "",
                phone: "",
                message: ""
            });

            return {
                ...toRefs(formData),
                hover: false
            }
        },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

    body {
        margin: 0;
        padding: 0;
        font-family: 'Avenir LT Std', sans-serif;
        height: 100vh;
    }

    .logo {
        height: 500px;
        width: 500px;
    }

    .container {
        display: table-row;
        height: 100vh;
        max-height: 100vh;
        max-width: 100vw;
    }

    .column-left {
        width: 35vw;
    }

    .column-right {
        width: 65vw;
        background: -webkit-linear-gradient(to right, #F4011A, #400238 30%);
        background: linear-gradient(to right, #F4011A -40%, #400238 100%);
    }

    .column {
        display: table-cell;
        padding: 4rem 8rem;
        height: 100%;
        text-align: center;
        vertical-align: top;
    }

    .spacing {
        height: 4em;
    }

    .align-left {
        text-align: left;
    }

    .align-right {
        text-align: right;
    }

    .contact {
        width: fit-content;
        float: right;
        text-align: left;
    }

    .contact ul {
        list-style-type: none;
        padding-inline-start: 0em;
        line-height: 1.8rem;
        margin: 0;
    }

    h1 {
        font-size: 2.2rem;
        line-height: 2.625rem;
    }

    h2 {
        font-size: 1.5rem;
        line-height: 2rem;
    }

    .orange-yellow {
        background: -webkit-linear-gradient(to right, #f97112 30%, #f8c310);
        background: linear-gradient(to right, #f97112 30%, #f8c310);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    ul {
        padding-inline-start: 1.5em;
        line-height: 1.6rem;
        margin: 0;
    }

    .appointment {
        color: #fff;
        text-transform: uppercase;
    }

    .form {
    }

    .form-input-group {
        display: flex;
        align-items: center;
        margin: 2em 0;
        flex-flow: row wrap;
        justify-content: center;
    }

    .form-input-group label {
        font-family: 'Avenir LT Std';
        display: inline-block;
        text-transform: uppercase;
        color: #fff;
        font-size: 18px;
        line-height: 22px;
        width: 120px;
        text-align: left;
        vertical-align: top;
    }

    .form-fields {
        border: none;
        display: inline-block;
        color: #111;
        font-size: 18px;
        line-height: 22px;
        padding: 8px 16px;
        width: 500px;
        max-width: 500px;
        border-radius: 4px;
        font-family: 'Avenir LT Std', sans-serif;
    }

    input::placeholder {
        color: #ADADAD;
    }

    .btn {
        padding: 16px 72px;
        background-color: #fff;
        font-family: 'Avenir LT Std';
        font-weight: 800;
        text-transform: uppercase;
    }

    .btn span {
        background: -webkit-linear-gradient(to right, #f97112 30%, #f8c310);
        background: linear-gradient(to right, #f97112 30%, #f8c310);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .btn:hover {
        cursor: pointer;
        background: -webkit-linear-gradient(to right, #f97112 30%, #f8c310);
        background: linear-gradient(to right, #f97112 30%, #f8c310);
        border: 2px solid #000;
    }

    .btn:hover span {
        color: #000;
        background: none;
        -webkit-background-clip: initial;
        -webkit-text-fill-color: initial;
    }

    @media (max-width: 991px) {
        .logo {
            width: 100vw;
            height: auto;
        }
        .container {
            display: grid;
        }

        .column-left, .column-right {
            display: table-cell;
            width: 100vw;
            padding: 1em;
        }

        .spacing {
            height: 1em;
        }

        .form-input-group label {
        width:unset;
        }
    }
</style>
