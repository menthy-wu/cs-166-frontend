"use client";
import Image from "next/image";
import logo from "../../public/logo.svg";
import Input from "./Input";
import Button from "./Button";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const router = useRouter();
  const login = () => {
    router.push("/store");
  };
  return (
    <div className="flex w-full h-full bg-gradient-to-r from-tm-purple to-tm-blue items-center justify-around">
      <div className="w-fit flex flex-col items-center justify-center text-white">
        <Image src={logo} alt="logo" width={100} height={100} />
        <div>Elevating Shopping to Prime Satisfaction!</div>
      </div>
      <div className="rounded-lg p-12 w-1/3 bg-white/60 flex flex-col justify-center items-start h-fit gap-3">
        <div>
          <div className="text-4xl font-light">LOGIN</div>
          <div className="text-base text-tm-gray">Theo & Menthy Inst. </div>
        </div>
        <Input
          name="username"
          type="text"
          title="username"
          placeholder="username"
          value={user.username}
          user={user}
          setUser={setUser}
          maxLength={100}
        />
        <Input
          name="password"
          type="text"
          title="password"
          placeholder="password"
          value={user.password}
          user={user}
          setUser={setUser}
          maxLength={100}
        />
        <Button onClick={login} text="SUBMIT" color="white" />
        <Link href="/register" className="text-tm-gray w-full text-center">
          register as new user
        </Link>
      </div>
    </div>
  );
};

export default Login;
