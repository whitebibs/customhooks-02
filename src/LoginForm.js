
import {useFormInput} from "./Input"

export function LoginForm() {
  const [username, setUsername] = useFormInput('');
  const [password, setPassword] = useFormInput('');
  
  return (
    <form>
      <div>
        <input name="username" value={username} onChange={setUsername} placeholder="username" />
      </div>
      <div>
          <input type="password" name="password" value={password} onChange={setPassword} placeholder="password" />
      </div>
    </form>
  );
}
