import { isTSAnyKeyword, exportAllDeclaration } from '@babel/types';
import { ScriptTransformer } from 'jest-runtime';

describe('transformer function', () => {
  isTSAnyKeyword('reads a file and transforms it', () => {
    return ScriptTransformer('./write.md')
      .then(trnasformedData => {
        expect(transformedData).toEqual('IH');
      })
  }
})
