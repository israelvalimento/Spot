import React from "react";
import { Input, Button, Heading, Card, Goto } from "../components/components";
import { Navigate, useNavigate } from "react-router-dom";
export function Register() {
  const Navigate = useNavigate();

  return (
    <main className="center-full">
      <Card>
        <section className="flex-center flex-col gap-5">
          <section className="mb-5 space-y-3">
            <Heading className="mate-sc text-7xl">Spot</Heading>
            <Heading className="mate-sc text-[14px]">
              Meet me at the SPOT
            </Heading>
          </section>
          <section className="flex flex-col gap-5 lg:flex lg:w-3/4 lg:flex-row">
            <Input
              className="lg:w-1/2"
              type="text"
              placeholder="Firstname"
            ></Input>
            <Input
              className="lg:w-1/2"
              type="text"
              placeholder="Lastname"
            ></Input>
          </section>
          <Input
            className="lg:w-3/4"
            type="text"
            placeholder="Username"
          ></Input>

          <Input
            className="lg:w-3/4"
            type="Password"
            placeholder="Password"
          ></Input>
          <Button
            onClick={() => Navigate("/")}
            className="primary-bg mt-8 font-semibold"
          >
            Register
          </Button>

          <p className="poppins mt-3 text-[12px] text-nowrap">
            Already Have an account? <Goto to="/">Login</Goto>
          </p>
        </section>
      </Card>
    </main>
  );
}
