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
    name: "MonsterSkill",
    embedded: false
  },
  {
    name: "Class",
    embedded: false
  },
  {
    name: "Boss",
    embedded: false
  },
  {
    name: "BossStruct",
    embedded: false
  },
  {
    name: "StageStruct",
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
    name: "Element",
    embedded: false
  },
  {
    name: "Role",
    embedded: false
  },
  {
    name: "CombatType",
    embedded: false
  },
  {
    name: "SkillType",
    embedded: false
  },
  {
    name: "ElementType",
    embedded: false
  },
  {
    name: "PetTalent",
    embedded: false
  },
  {
    name: "Rarity",
    embedded: false
  },
  {
    name: "Hero",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://us1.prisma.sh/jaketran/UlalaIdleAdventure/dev`
});
exports.prisma = new exports.Prisma();
