"use client";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Logged from "../../components/layouts/Logged";

export default function Dashboard() {
    
  return (
    <>
      <Logged>
        <div className="min-h-screen bg-white rounded-lg p-3">
          <Link className="text-blue-500" to="/">
            Home
          </Link>
        </div>
      </Logged>
    </>
  );
}
