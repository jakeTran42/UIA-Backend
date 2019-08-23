"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Guide",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "Skill",
    embedded: false
  },
  {
    name: "Class",
    embedded: false
  },
  {
    name: "Map",
    embedded: false
  },
  {
    name: "Continent",
    embedded: false
  },
  {
    name: "Boss",
    embedded: false
  },
  {
    name: "Role",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://us1.prisma.sh/jaketran/UlalaIdleAdventure/dev`
});
exports.prisma = new exports.Prisma();
