import { Link } from "react-router-dom"
import "./Login.scss"


function Login() {
  return (
    <div className="login">
        <div className="card">
            <div className="left">
                <h1>Hello guys</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non et explicabo expedita quisquam voluptatum harum, dolores vitae ipsum eum sit dolor maiores perspiciati
                    s reprehenderit hic enim! Praesentium voluptatem commodi labore.</p>
                    <span>Dont have an account?</span>
                   <Link to="/register"><button>Register</button></Link> 
            </div>
            <div className="right">
                <h1>login</h1>
                <form action="onSumbit">
                    <input type="text" placeholder="usernsamr"/>
                    <input type="password" placeholder="password" />
                    <button >Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login