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
});
