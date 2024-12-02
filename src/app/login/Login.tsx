import { Button } from "../../ui/atom/button/Button";
import { Input } from "../../ui/atom/input/Input";
import { LoginProps } from "./Login.types";

export const Login = ({ register, handleSubmit, errors }:LoginProps) => {
    return (
      <div className="min-w-screen flex min-h-screen items-center justify-center">
        <div className="flex h-96 w-96 flex-col justify-around rounded-lg bg-white p-8 shadow-2xl">
          <h1 className="text-center text-4xl font-bold">Login</h1>
          <form onSubmit={handleSubmit}>
            <Input
              label="Email"
              error={errors.email?.message  as string}
              name="email"
              type="text"
              placeholder="Email"
              register={register('email')}
            />
            <Input
              label="Password"
              error={errors.password?.message  as string}
              name='password'
              type="password"
              placeholder="Password"
              register={register('password')}
            />
            <Button type='submit' text="Login"/>
          </form>
        </div>
      </div>
    );
  };
  