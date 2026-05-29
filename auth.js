
// ========================================
// API
// ========================================

const API_URL =
"https://chatter-shortwave-vagrantly.ngrok-free.dev";



// ========================================
// AUTH
// ========================================

const Auth = {

    currentUser:
        JSON.parse(
            localStorage.getItem(
                "wayfarer_current_user"
            )
        ) || null,



    // =========================
    // REGISTER
    // =========================

    async register(email,password,name){

        try{

            const response =
                await fetch(
                    `${API_URL}/api/register`,
                    {

                        method:"POST",

                        headers:{
                            "Content-Type":"application/json"
                        },

                        body:JSON.stringify({
                            email,
                            password,
                            name
                        })

                    }
                );

            return await response.json();

        }catch(error){

            console.error(error);

            return{
                success:false,
                message:"Сервер недоступен"
            };

        }

    },



    // =========================
    // LOGIN
    // =========================

    async login(email,password){

        try{

            const response =
                await fetch(
                    `${API_URL}/api/login`,
                    {

                        method:"POST",

                        headers:{
                            "Content-Type":"application/json"
                        },

                        body:JSON.stringify({
                            email,
                            password
                        })

                    }
                );

            const result =
                await response.json();



            // СОХРАНЯЕМ ПОЛЬЗОВАТЕЛЯ

            if(result.success){

                this.currentUser = {

                    name:
                        result.user?.name || "User",

                    email:
                        result.user?.email || email

                };


                localStorage.setItem(

                    "wayfarer_current_user",

                    JSON.stringify(
                        this.currentUser
                    )

                );

            }

            return result;

        }catch(error){

            console.error(error);

            return{
                success:false,
                message:"Ошибка входа"
            };

        }

    },



    // =========================
    // LOGOUT
    // =========================

    logout(){

        this.currentUser = null;

        localStorage.removeItem(
            "wayfarer_current_user"
        );

    },



    // =========================
    // CHECK LOGIN
    // =========================

    isLoggedIn(){

        return this.currentUser !== null;

    },



    // =========================
    // GET USER
    // =========================

    getCurrentUser(){

        return this.currentUser;

    }

};




// ========================================
// UI
// ========================================

function updateAuthUI(){

    const authBtn =
        document.getElementById(
            "authBtn"
        );

    if(!authBtn) return;



    // =========================
    // LOGGED IN
    // =========================

    if(Auth.isLoggedIn()){

        const user =
            Auth.getCurrentUser();

        authBtn.innerHTML = `

            <div class="auth-user">

                <span class="auth-name">

                    👤
                    ${user.name}

                </span>

                <button
                    class="logout-btn"
                    onclick="handleLogout()"
                >
                    Выход
                </button>

            </div>

        `;

    }



    // =========================
    // NOT LOGGED
    // =========================

    else{

        authBtn.innerHTML = `

            <a
                href="register.html"
                class="login-btn"
            >
                Вход
            </a>

        `;

    }

}




// ========================================
// LOGOUT
// ========================================

function handleLogout(){

    Auth.logout();

    location.reload();

}




// ========================================
// START
// ========================================

document.addEventListener(

    "DOMContentLoaded",

    updateAuthUI

);

