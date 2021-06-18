import { library } from '@fortawesome/fontawesome-svg-core';

<template>
    <div class="container">
        <div class="column column-left">
            <img class="logo" :src="require('@/images/ElizabethLogo.svg')" alt="Elizabeth Ojo Igbinoba Events Centre" />
            <h1 class="align-left orange-yellow">For your <b>social engagement</b>.</h1>
            <ul class="align-left">
                <li>Wedding Reception</li>
                <li>Birthday</li>
                <li>Sports Carnival</li>
                <li>General Events</li>
            </ul>
            <div class="spacing"></div>
            <div class="contact">
                <div class="contact-left">
                    <h2 class="orange-yellow">Contact us</h2>
                    <ul>
                        <li><font-awesome-icon :icon="envelope" />booking@eoic.ng</li>
                        <li>08131286186</li>
                        <li>08108127209</li>
                    </ul>
                </div>
                <div class="contact-right">
                    <img class="house" :src="require('@/images/house.jpg')" alt="Events" />
                </div>
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

                <div class="form-input-group" style="align-items: start;">
                    <label for="message">Message*</label>
                    <textarea type="text" id="message" rows="8" class="form-fields" v-model="message" placeholder="Tell us about who you are and the event you are hosting. We will get back to you as soon as we can!" />
                </div>

                <div class="spacing"></div>
                <button class="btn clear-right" type="submit"><span>Confirm Booking</span></button>
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

    * {
        box-sizing: border-box;
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
        padding: 2rem 10rem;
    }

    .column-right {
        width: 65vw;
        padding: 16rem 4rem;
        background: -webkit-linear-gradient(to right, #F4011A, #400238 30%);
        background: linear-gradient(to right, #F4011A -40%, #400238 100%);
    }

    .contact-left {
        width: 30%;
    }

    .contact-right {
        width: 70%;
    }

    .column {
        display: table-cell;
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

    .clear-right {
        clear: both;
        float: right;
    }

    .contact {
        width: fit-content;
        text-align: left;
        display: flex;
    }

    .contact ul {
        list-style-type: none;
        padding-inline-start: 0em;
        line-height: 1.8rem;
        width: fit-content;
        margin: 0;
    }

    .house {
        width: 100%;
    }

    h1 {
        font-size: 3.0rem;
        line-height: 3.6rem;
        font-weight: 300;
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
    width: 50%;
    margin: 0em auto;
    }

    .form-input-group {
        display: flex;
        align-items: center;
        margin: 2em auto;
        flex-flow: row wrap;
        justify-content: center;
    }

    .form-input-group label {
        font-family: 'Avenir LT Std';
        display: flex;
        text-transform: uppercase;
        color: #fff;
        font-size: 18px;
        line-height: 22px;
        width: 10vw;
        max-width: 128px;
        text-align: left;
        vertical-align: top;
        padding: 0 1em;
    }

    .form-fields {
        border: none;
        flex-grow: 1;
        color: #111;
        font-size: 18px;
        line-height: 22px;
        padding: 8px 16px;
        width: 500px;
        max-width: 100%;
        border-radius: 4px;
        font-family: 'Avenir LT Std', sans-serif;
    }

    input::placeholder, textarea::placeholder {
        color: #ADADAD;
    }

    .btn {
        padding: 16px 72px;
        background-color: #F8C010;
        font-family: 'Avenir LT Std';
        font-weight: 800;
        text-transform: uppercase;
    }

    .btn span {
        background: -webkit-linear-gradient(to right, #F4011A -40%, #400238 100%);
        background: linear-gradient(to right, #F4011A -40%, #400238 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    .btn:hover {
        cursor: pointer;
        background: -webkit-linear-gradient(to left, #f97112 30%, #f8c310);
        background: linear-gradient(to left, #f97112 30%, #f8c310);
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
            width: unset;
        }

        .contact-left, .contact-right {
            width: 50%;
        }

        .form-input-group text-area {
            width: 100%;
        }

        .btn {
            padding: 1rem 2rem;
        }
    }
</style>
