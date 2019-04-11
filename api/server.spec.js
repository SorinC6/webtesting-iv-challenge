const express = require("express");
const server = require("./server");
const request = require("supertest");
const db = require("../database/dbConfig");

describe("server", () => {
  describe("Get / endpoint", () => {
    it("is the right enviroment", () => {
      expect(process.env.DB_ENV).toBe("testing");
    });
  });

  it("it should returs the right response body", () => {
    const expectedBody = {
      name: "TestName",
      special_power: "testPower",
      world: "testWorld"
    };
    return request(server)
      .get("/api/chars")
      .expect(expectedBody)
      .expect(200);
  });
});
