import React from "react";
import { Input, Button, Heading, Card, Goto } from "../components/components";
export function Login() {
  return (
    <>
      <main className="center-full ">
        <Card>
          <section className="flex-center  flex-col gap-5">
            <section className="space-y-3 mb-5">
              <Heading className="mate-sc text-7xl">Spot</Heading>
              <Heading className="mate-sc text-[14px]">
                Meet me at the SPOT
              </Heading>
            </section>
            <Input className="w-3/4" type="text" placeholder="Username"></Input>
            <Input
              className="w-3/4"
              type="Password"
              placeholder="Password"
            ></Input>
            <Button className="font-semibold  primary-bg mt-8">Login</Button>

            <p className="poppins text-[12px] mt-3 text-nowrap">
              Don't Have an account? <Goto to="/Register">register</Goto>
            </p>
          </section>
        </Card>
      </main>
    </>
  );
}
