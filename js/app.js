Vue.config.devtools = true
Vue.component('signup', {
    template: '#signup',
    data() {
        
        return {
            password: '',
            confirm: '',
            email: '',
            msg: [],
            disabledValidation: true,
            emailok: false,
            passok: false,
            confirmok: false,
        }
    },

    watch: {
        email(value){
            this.email = value;
            this.check_email(value);
        },
        password(value) {
            this.password = value;
            this.check_password(value);
        },
        confirm(value){
            this.confirm = value;
            this.check_confirm(value);
        }
    },
    methods: {
        getall() {
            if (this.emailok && this.passok && this.confirmok){
                this.disabledValidation = false;
            }
            else {
                this.disabledValidation = true;
            }
        },
        go_to_tac() {
            this.$emit('change', 'tac')
        },
        check_email(value) {

             if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value))
              {
                  this.msg['email'] = '',
                  this.emailok = true
                }
            else {
                this.msg['email'] = 'Format maila nie poprawny'
                this.emailok = false
            }
        },
        check_password(value) {

            if (value.length > 7 )
             {
                 this.msg['password'] = '',
                 this.passok = true
               }
           else {
               this.msg['password'] = 'Hasło musi zawierać przynajmniej 8 znaków',
               this.passok = false
           }
       },
       check_confirm(value) {
        if (value == this.password )
         {
             this.msg['confirm'] = '',
             this.confirmok = true
           }
       else {
           this.msg['confirm'] = 'Hasła nie są takie same',
           this.confirmok = false
       }
   },
    }
})

Vue.component('tac', {
    template: '#tac',
    methods: {
        back_to_singup() {
            this.$emit('change', 'signup')
        }
    }
})
var app = new Vue ({
    el: '#app',
    data: {
        componentName: "signup"
    },
    methods: {
        changeit(newc) {
            this.componentName = newc
              }
    }
}) 