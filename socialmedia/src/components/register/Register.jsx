import { Link } from "react-router-dom"
import "./Register.scss"

function Register() {
  return (
    <div className="register">
        <div className="card">
            <div className="left">
                <h1>Hello guys</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non et explicabo expedita quisquam voluptatum harum, dolores vitae ipsum eum sit dolor maiores perspiciati
                    s reprehenderit hic enim! Praesentium voluptatem commodi labore.</p>
                    <span>Already have an account</span>
                    <Link to="/login"><button>Login</button></Link>
                    
            </div>
            <div className="right">
                <h1>Register</h1>
                <form action="onSumbit">
                  <input type="text" name="" id=""  placeholder="Name"/>
                    <input type="text" placeholder="usernsamr"/>
                    <input type="Email" placeholder="Email" />
                    <input type="password" placeholder="password" />
                    <button >Login</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Register