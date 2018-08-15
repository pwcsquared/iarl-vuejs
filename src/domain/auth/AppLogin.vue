<template>
  <v-app id="login">
    <v-layout 
      row
      justify-center
      align-center
      app    
    >
      <v-flex 
        xs6 
        sm8 
        md4
      > 
        <v-card>
          <v-container
            fluid
            grid-list-md
          >
            <v-layout>
              <v-flex xs6 >              
                <br> 
                <v-form >                
                  <v-text-field
                    v-model="user.username"
                    :rules="[rules.required]"
                    prepend-icon="person"
                    name="username"
                    label="Nome de usuário"
                  />
                  <v-text-field
                    v-model="user.password"
                    :rules="[rules.required, rules.min]"
                    :type="'password'"
                    prepend-icon="lock"
                    name="Password"
                    label="Senha"         
                  />                                        
                                     
                  <v-btn 
                    :loading="rules.isLoading" 
                    dark 
                    color="primary" 
                    large 
                    block 
                    @click="login()">Login</v-btn>
                  <v-spacer/>
                  <v-spacer/>
                  <v-spacer/>
                  
                </v-form>              
              </v-flex>
              <v-flex
                xs6
                align-center
                justify-center
                layout                            
              >              
                <img 
                  src="../../assets/g-logo-3d.png" 
                  alt="avatar"
                  height="200"
                  width="300" 
                >              
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>  
  </v-app>
</template>

<script>
export default {
  name: "AppLogin",
  data() {
    return {
      user: {
        username: "",
        password: ""
      },
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 8 || "Min 8 characters",
        emailMatch: () =>
          "The email or username and password you entered don't match",
        show: false,
        error: false,
        isLoading: false
      },
      assets: {
        logoBlueBg: "https://cdn.vuetifyjs.com/images/cards/house.jpg"
      }
    };
  },
  methods: {
    async login() {
      this.rules.isLoading = true;

      try {
        const res = await this.axios.post("/login", {
          username: this.user.username,
          password: window.btoa(this.user.password)
        });

        this.$auth.setToken(res.data.token);
        this.$router.push("/dashboard");
      } catch (err) {
        this.rules.error = true;
        this.rules.isLoading = false;
      }
    }
  }
};
</script>

<style>
#login {
  background-image: url(../../assets/bg-login.jpg);
}
</style>
