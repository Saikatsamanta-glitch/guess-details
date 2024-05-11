"use client";
import Button from "@/components/Button";
import "./route.css";
import SocialMedia from "@/components/SocialMedia";
import { useState } from "react";
import get_details from "@/actions/fetchDetails";
import toast from "react-hot-toast";
import Cards from "@/components/Cards";

export default function Home() {
  const [name, setName] = useState("");
  const [details, setDetails] = useState({
    name: "",
    age: "",
    gender: "",
    nationality: "",
  });
  const generateDetails = async () => {
    if (name == "") {
      toast.error("Please provide name");
      return;
    }
    const { age, gender, nationality } = await get_details({ name });
    setDetails({
      name,
      age,
      gender,
      nationality,
    })
    setName("");
  };
  return (
    <div className="h-full w-full flex items-center justify-center px-9 ">
    
      <div className="flex flex-col items-center justify-center h-full overflow-y-hidden">
      <Cards name={details.name} age={details.age} gender={details.gender} nationality={details.nationality} />
        <div className="input-container mb-8 border-white/60 border">
          <p className="bash-text">
            <span className="user">user-name</span>
            <span className="vm">@guess</span>:<span className="char">~</span>$
          </p>
          <input
            className="input"
            placeholder="sudo -rf/ enter name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <Button onClick={generateDetails} />
        
      </div>
      <SocialMedia />
    </div>
  );
}
