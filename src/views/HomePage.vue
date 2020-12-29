<template>
  <div class="container-fluid m-0 p-0">
    <div id="home-page" class="full-height p-4">
      <div class="container pt-3">
        <div class="row pb-5">
          <div class="col-lg-6 pt-4 my-auto">
            <div class="text-center mb-3 d-block d-lg-none">
              <h1 class="display-3">{{ title }}</h1>
              <h3>Find the World</h3>
            </div>
            <img
              id="iphone-img"
              src="../assets/travelTreasuryiPhone.png"
              class="img-fluig"
            />
          </div>

          <div class="col-lg-6 my-auto pt-4 bg-light">
            <div class="text-center mb-3 d-none d-lg-block">
              <h1 class="display-3">{{ title }}</h1>
              <h3>Find the World</h3>
            </div>

            <div class="border p-3 p-md-5 bg-white rounded shadow d-none">
              <h2>Coming Soon</h2>
              <form @submit.prevent="addEmail(email)">
                <div class="form-group">
                  <label for="emailSignup"
                    >Reserve your account now, we'll contact you when it's
                    live</label
                  >
                  <input
                    v-model="email"
                    type="email"
                    id="emailSignup"
                    placeholder="Enter Email"
                    class="form-control"
                  />
                  <small id="emailHelp" class="form-text text-muted"
                    >We'll never share your email address</small
                  >
                  <button type="submit" class="btn btn-success mt-3">
                    Join Waiting List
                  </button>
                  <div class="mt-4">
                    <p class="m-0">{{ message }}</p>
                  </div>
                </div>
              </form>
            </div>

            <div id="available" class="p-2">
              <h4 class="text-center mb-2 mt-3 text-dark">Available On</h4>
              <div class="row">
                <div class="col my-auto">
                  <img
                    src="../assets/download_apple.png"
                    class="float-right img-fluid app_store_img"
                  />
                </div>
                <div class="col my-auto">
                  <img
                    src="../assets/download_google.png"
                    class="float-left img-fluid app_store_img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="about" class="bg-light p-3 p-md-5">
      <div class="row">
        <div class="col-lg">
         
          <img src="../assets/icons/app.svg" height="120" class="m-4" />
          <h5 class="ml-md-4 mr-md-4 text-left">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus porro sequi ab ipsum libero velit ullam aliquam earum. In illum unde pariatur odit hic vitae dolor quod distinctio recusandae neque.
          </h5>
        </div>
        <div class="col-lg">
         
          <img src="../assets/icons/piggy-bank.svg" height="120" class="m-4" />
          <h5 class="ml-md-4 mr-md-4 text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit mollitia accusantium quaerat sed voluptas numquam temporibus cupiditate dicta repellat blanditiis. Ipsam nihil aliquam fuga minima at eligendi expedita similique excepturi?
          </h5>
        </div>
        <div class="col-lg">
         
          <img src="../assets/icons/passport.svg" height="120" class="m-4" />
          <h5 class="ml-md-4 mr-md-4 text-left">
            When the day of your trip comes, have the peace of mind that you
            planned out your expenses. Never worry about money on a trip again!
          </h5>
        </div>
        
      </div>
      <div class="row">
           <div class="col-lg">
         
          <img src="../assets/icons/app.svg" height="120" class="m-4" />
          <h5 class="ml-md-4 mr-md-4 text-left">
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus porro sequi ab ipsum libero velit ullam aliquam earum. In illum unde pariatur odit hic vitae dolor quod distinctio recusandae neque.
          </h5>
        </div>
        <div class="col-lg">
         
          <img src="../assets/icons/piggy-bank.svg" height="120" class="m-4" />
          <h5 class="ml-md-4 mr-md-4 text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit mollitia accusantium quaerat sed voluptas numquam temporibus cupiditate dicta repellat blanditiis. Ipsam nihil aliquam fuga minima at eligendi expedita similique excepturi?
          </h5>
        </div>
        <div class="col-lg">
         
          <img src="../assets/icons/passport.svg" height="120" class="m-4" />
          <h5 class="ml-md-4 mr-md-4 text-left">
            When the day of your trip comes, have the peace of mind that you
            planned out your expenses. Never worry about money on a trip again!
          </h5>
        </div>
      </div>
    </div>

    <div id="contact" class="p-4">
      <div class="row justify-content-center mt-3 mb-3">
        <div v-if="show_contact == true" class="col-lg-4">
          <h2>Have Any Questions?</h2>
          <p>Contact us by filling out the information below</p>

          <div v-if="contact_notice != ''" class="alert alert-warning">
            There was a problem submitting your message. {{ contact_notice }}
          </div>

          <form @submit.prevent="sendContactMessage()">
            <div class="form-group text-left">
              <input
                v-model="contact_email"
                type="email"
                class="form-control"
                placeholder="Enter Your Email"
              />
              <textarea
                v-model="contact_message"
                class="form-control mt-3"
                placeholder="Enter Your Message"
                rows="5"
              ></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Send Message</button>
          </form>
        </div>

        <div v-else>
          <h3>Message Sent Successfully!</h3>
          <p>
            Thank you for contacting us, we'll get back to you as soon as we
            can.
          </p>
        </div>
      </div>
    </div>

    <div id="footer" class="p-4">
      <footer class="text-light p-4">
        <a
          href=""
          target="_blank"
          class="text-warning"
          >Build This App</a
        >
        |
        <a href="#" class="text-warning">Privacy Policy</a>
        <br />
        <small>&copy; 2020, SuploApp</small>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "homepage",
  data() {
    return {
      title: "Travel Treasury",
      email: "",
      message: "",
      show_contact: true,
      contact_email: "",
      contact_message: "",
      contact_notice: "",
      bg_img:'../assets/travelTreasuryiPhone.png'
    };
  },
};
</script>

<style>
#home-page {
  background-color: #92d2f2;
  background: url("../assets/bg-vue.jpg") no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
}
#about {
  min-height: 40vh;
}
#iphone-img {
  max-height: 80vh;
}
#contact {
  background-color: #57aeaf;
}
#footer {
  background-color: #252223;
}
.app_store_img {
  max-height: 80px;
}
</style>