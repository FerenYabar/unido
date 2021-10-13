export class Usuario{
    constructor(
        private dniUsuario:String,
        private NombreUsuario:String,
        private ApellidoUsuario:String,
        private Usuario:String,
        private Contraseña:String,
        private Celular:String,
        private Correo:String,
        private Dirección:String,
    ){}
    getnombreUsuario(){
        return this.NombreUsuario
    }
    getdniUsuario(){
        return this.dniUsuario
    }
    getApellidoUsuario(){
        return this.ApellidoUsuario
    }
    getusuariousuario(){
        return this.Usuario
    }
    getconstraseñaUsuario(){
        return this.Contraseña
    }
    getcelularUsuario(){
        return this.Celular;
    }
    getCorreoUsuario(){
        return this.Correo
    }
    getDireccionUsuario(){
        return this.Dirección
    }
    

        
}
const usuario01=new Usuario("12457896","Josept","Ccoyore","jose123","123","954123678","jose@hotmail.com","Urb. Magisterio segunda etapa")
const usuario02=new Usuario("85742631","Pedro","Picapiedra","pedro123","321","978456632","picapiedra@hotmail.com","Urb. La Florida M-23")
const usuario03=new Usuario("84752633","Pabel","Peña","pabelita123","32111","978484859","pabelita@hotmail.com","Urb. entel Peru M-22")
const usuario04=new Usuario("85742631","Nayely","Picapiedra","pedro123","321","978456632","picapiedra@hotmail.com","Urb. La Florida M-23")
const usuario05=new Usuario("84752633","Jose","Peña","pabelita123","32111","978484859","pabelita@hotmail.com","Urb. entel Peru M-22")
export const usuarios:Usuario[]=[
    usuario01,usuario02,usuario03,usuario04,usuario05
]