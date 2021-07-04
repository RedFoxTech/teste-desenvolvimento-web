<template>
  <v-container fluid>
    <v-snackbar
      style="top: -60px"
      v-model="snackbar"
      :timeout="4000"
      :color="snackbarColor"
    >
      <v-icon>{{ snackbarIcon }}</v-icon>
      {{ snackbarText }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          icon
          small
          v-bind="attrs"
          @click="snackbar = false"
        >
          <v-icon>close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
    <v-dialog max-width="400" v-model="resetPasswordDialog">
      <v-card @keyup.enter="sendPasswordResetEmail()">
        <v-card-title class="black lighten white--text">
          Atualização de Senha
        </v-card-title>

        <v-card-text>
          <v-col>
            <p>
              Digite seu e-mail no campo abaixo para receber um link de
              atualização de senha.
            </p>
            <v-text-field
              outlined
              placeholder="exemplo@exemplo.com"
              hide-details
              v-model="resetPasswordEmail"
            ></v-text-field>
          </v-col>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn
            color="dark grey"
            text
            small
            @click="resetPasswordDialog = false"
          >
            Cancelar
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="black" text small @click="sendPasswordResetEmail()">
            Enviar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-form>
      <v-row class="text-center">
        <v-col cols="4">
          <v-card @keyup.enter="logIn()" min-width="200px" style="top: 45vh; left: 10vh;">
            <v-progress-linear
              color="blue"
              :indeterminate="isLoading"
            ></v-progress-linear>
            <v-card-title class="black" style="color: white;">
              Login
            </v-card-title>
            <v-card-text>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    prepend-icon="alternate_email"
                    v-model="email"
                    color="black"
                    placeholder="E-mail"
                    required
                    :rules="
                      !hasLoginError ? [true] : ['Não foi possível entrar']
                    "
                  ></v-text-field>
                </v-col>

                <v-col>
                  <v-text-field
                    prepend-icon="lock"
                    :type="isPwsVisible ? 'text' : 'password'"
                    v-model="password"
                    color="black"
                    placeholder="Senha"
                    :append-icon="
                      isPwsVisible ? 'visibility' : 'visibility_off'
                    "
                    @click:append="
                      () => {
                        isPwsVisible = !isPwsVisible;
                      }
                    "
                    required
                    :rules="
                      !hasLoginError ? [true] : ['Não foi possível entrar']
                    "
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-card-text>

            <v-card-actions>
              <v-btn
                x-small
                color="black"
                text
                @click.native="resetPasswordDialog = true"
              >
                Esqueceu sua senha?
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn
                small
                color="black"
                text
                @click.native="logIn()"
                :disabled="isLoading"
              >
                Entrar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
import router from "@/router";
import firebase from "@/firebase";

export default {
  name: "Login",

  data: () => ({
    snackbar: false,
    snackbarColor: "",
    snackbarText: "",
    snackbarIcon: "",
    resetPasswordDialog: false,
    resetPasswordEmail: "",
    hasLoginError: false,
    isPwsVisible: false,
    isLoading: false,
    email: "",
    password: "",
  }),
  methods: {
    ...mapActions(["login"]),
    async logIn() {
      this.isLoading = true;
      await firebase.auth.setPersistence(firebase.auth_class.Auth.Persistence.LOCAL);
      firebase.auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then((res) => {
          return firebase.getCurrentUser()
        })
        .catch((err) => {
          this.snackbarColor = "error";
          this.snackbarIcon = "priority_high";
          if (err.code == "auth/user-not-found") {
            this.snackbarText = "E-mail não encontrado, tente novamente.";
            this.snackbar = true;
          } else if (err.code == "auth/invalid-email") {
            this.snackbarText = "E-mail inserido é inválido, tente novamente.";
            this.snackbar = true;
          } else if (err.code == "auth/too-many-requests") {
            this.snackbarText =
              "Muitas tentativas falhas de login, altere sua senha ou tente novamente mais tarde.";
            this.snackbar = true;
          } else if (err.code == "auth/wrong-password") {
            this.snackbarText = "Senha incorreta, tente novamente.";
            this.snackbar = true;
          }
          this.isLoading = false;
        })
        .then(user => {
          this.login({
            "currentUser": user
          });
          this.isLoading = false;
          router.push("/");
        })
        .catch(err => console.log("User not retrievied, error: " + err))
    },
    sendPasswordResetEmail() {
      firebase.auth
        .sendPasswordResetEmail(this.resetPasswordEmail)
        .then((res) => {
          this.snackbarColor = "success";
          this.snackbarText = "E-mail enviado com sucesso!";
          this.snackbarIcon = "done";
          this.snackbar = true;
        })
        .catch((err) => {
          this.snackbarColor = "error";
          if (err.code == "auth/user-not-found") {
            this.snackbarText = "E-mail não encontrado, tente novamente.";
          } else if (err.code == "auth/invalid-email") {
            this.snackbarText = "E-mail inserido é inválido, tente novamente.";
          } else {
            this.snackbarText =
              "Erro ao enviar e-mail, tente novamente mais tarde.";
          }
          this.snackbarIcon = "priority_high";
          this.snackbar = true;
        });
      this.resetPasswordDialog = false;
    },
  },
};
</script>