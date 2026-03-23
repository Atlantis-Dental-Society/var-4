#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { AdsMediaStack } from "../lib/media-stack";

const app = new cdk.App();

new AdsMediaStack(app, "AdsMediaStack", {
  env: { account: "571600840429", region: "us-east-1" },
});
