"use client";
import Image from "next/image";
import logo from "../../../public/logo.svg";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { useContext } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import UserContext from "@/components/UserContext";
import Link from "next/link";

const page = () => {
  const router = useRouter();
  const { user, setUser } = useContext(UserContext);
  const register = (e) => {
    e.preventDefault();
    if (!user.name || !user.password || !user.latitude || !user.longitude) {
      toast("❌ Please fill in all fields");
      return;
    }
    if (
      isNaN(parseFloat(user.latitude)) ||
      parseFloat(user.latitude) > 100 ||
      parseFloat(user.latitude) < 0 ||
      isNaN(parseFloat(user.longitude)) ||
      parseFloat(user.longitude) > 100 ||
      parseFloat(user.longitude) < 0
    ) {
      toast("❌ invalid latitude or longitude");
      return;
    }
    fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(user),
    })
      .then((response) => {
        response.json();
      })
      .then((res) => {
        setUser({ ...user, type: "customer" });
        router.push("/table/store");
      })
      .catch((err) => {
        toast("❌ internal server error " + err.message);
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
          <div className="text-4xl font-light">REGISTER</div>
          <div className="text-base text-tm-gray">Theo & Menthy Inst. </div>
        </div>
        <form className="w-full">
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
            type="text"
            title="password"
            placeholder="password"
            value={user.password}
            user={user}
            setUser={setUser}
            maxLength={100}
          />
          <Input
            name="latitude"
            type="text"
            title="latitude"
            placeholder="latitude"
            value={user.latitude}
            user={user}
            setUser={setUser}
            maxLength={100}
          />
          <Input
            name="longitude"
            type="text"
            title="longitude"
            placeholder="longitude"
            value={user.longitude}
            user={user}
            setUser={setUser}
            maxLength={100}
          />
          <Button onClick={register} text="SUBMIT" color="white" />
        </form>
        <Link href="/" className="text-tm-gray w-full text-center">
          back to login
        </Link>
      </div>
    </div>
  );
};

export default page;
