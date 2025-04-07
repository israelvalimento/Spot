import React from "react";
import { Input, Button, Heading, Card, Goto } from "../components/components";
import { Navigate, useNavigate } from "react-router-dom";
export function Register() {
  const Navigate = useNavigate();

  return (
    <main className="center-full ">
      <Card>
        <section className="flex-center  flex-col gap-5">
          <section className="space-y-3 mb-5">
            <Heading className="mate-sc text-7xl">Spot</Heading>
            <Heading className="mate-sc text-[14px]">
              Meet me at the SPOT
            </Heading>
          </section>
          <section className="w-3/4 flex flex-col lg:flex lg:flex-row gap-5">
            <Input
              className="w-full lg:w-1/2"
              type="text"
              placeholder="Firstname"
            ></Input>
            <Input
              className="w-full lg:w-1/2"
              type="text"
              placeholder="Lastname"
            ></Input>
          </section>
          <Input className="w-3/4" type="text" placeholder="Username"></Input>

          <Input
            className="w-3/4"
            type="Password"
            placeholder="Password"
          ></Input>
          <Button
            onClick={() => Navigate("/Login")}
            className="font-semibold primary-bg mt-8 "
          >
            Register
          </Button>

          <p className="poppins text-[12px] mt-3 text-nowrap">
            Already Have an account? <Goto to="/">Login</Goto>
          </p>
        </section>
      </Card>
    </main>
  );
}
