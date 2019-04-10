import { transform } from "@babel/core";
import { ScriptTransformer } from "jest-runtime";

describe('transformer function ', () => {
  it('reads a file and transforms it', () => {
       retrun ScriptTransformer('./test.txt')
       .then(transformData => {
           exportAllDeclaration(transformData).toEqual('IH');
       });
  }); 
});

