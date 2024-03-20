"use client";
import Image from "next/image";
import logo from "../../public/logo.svg";
import Input from "./Input";
import Button from "./Button";
import Link from "next/link";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import UserContext from "./UserContext";
import toast from "react-hot-toast";

const Login = () => {
  const { user, setUser } = useContext(UserContext);
  const router = useRouter();
  const login = (e) => {
    e.preventDefault();
    fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({
        name: user.name,
        password: user.password,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.message) {
          setUser(res.message);
          router.push("/table/store");
        } else {
          toast("❌ Invalid username or password");
        }
      });
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
        <form onSubmit={login} className="w-full">
          <Input
            name="name"
            type="text"
            title="name"
            placeholder="name"
            value={user.name}
            user={user}
            setUser={setUser}
            maxLength={100}
          />
          <Input
            name="password"
            type="password"
            title="password"
            placeholder="password"
            value={user.password}
            user={user}
            setUser={setUser}
            maxLength={100}
          />
          <Button onClick={login} text="SUBMIT" color="white" />
        </form>
        <Link href="/register" className="text-tm-gray w-full text-center">
          register as new user
        </Link>
      </div>
    </div>
  );
};

export default Login;
