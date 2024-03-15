import { useState } from 'react'
import { Validation } from './components/Validation'

interface FormValues {
  name: string
  email: string
  password: string
}

function App() {
  const [values, setValues] = useState<FormValues>({
    name: '',
    email: '',
    password: '',
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    setValues({ ...values, [name]: value })
  }

  function handleValidation(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const validationErrors = Validation(values)
    setErrors(validationErrors)

    // call API
  }

  return (
    <form onSubmit={handleValidation}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" onChange={handleInput} />
      {errors.name && <p className="text-red-500">{errors.name}</p>}

      <label htmlFor="email">Email</label>
      <input type="email" name="email" onChange={handleInput} />
      {errors.email && <p className="text-red-500">{errors.email}</p>}

      <label htmlFor="password">Password</label>
      <input type="password" name="password" onChange={handleInput} />
      {errors.password && <p className="text-red-500">{errors.password}</p>}

      <button type="submit">Submit</button>
    </form>
  )
}

export default App
