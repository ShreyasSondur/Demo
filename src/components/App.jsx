import React from 'react'
import { useForm} from "react-hook-form"
import '../App.css'
const App = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function onSubmit(data){
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit )}> 
        <div>
          <label>User Name</label>
          <input {...register('userName',{
            required:true,
            message:'must fill',
            minLength:6
            })}/>
            {errors.userName && <p>{errors.userName.message}</p>}
        </div>
        <br/>
        <div>
          <label>Password</label>
          <input {...register('password',{
            required:true,
            minLength:{value:6,message:'Password must be of min 6 charecters'}
          })}/>
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <br/>
        <div>
          <button>Submit</button>
        </div>
    </form>
  )
}

export default App