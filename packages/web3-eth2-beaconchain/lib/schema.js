"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DefaultSchema = void 0;
var DefaultSchema = {
  packageName: 'eth2-beaconchain',
  routePrefix: '/eth/v1/beacon/',
  methods: [{
    name: 'getGenesis',
    route: 'genesis',
    restMethod: 'get',
    inputFormatter: null,
    outputFormatter: null,
    errors: null,
    errorPrefix: 'Failed to get genesis block:'
  }, {
    name: 'getHashRoot',
    route: 'states/${stateId}/root',
    restMethod: 'get',
    inputFormatter: null,
    outputFormatter: null,
    errors: null,
    errorPrefix: 'Failed to get state hash tree root:'
  }, {
    name: 'getForkData',
    route: 'states/${stateId}/fork',
    restMethod: 'get',
    inputFormatter: null,
    outputFormatter: null,
    errors: null,
    errorPrefix: 'Failed to get fork object for state:'
  }, {
    name: 'getFinalityCheckpoint',
    route: 'states/${stateId}/finality_checkpoints',
    restMethod: 'get',
    inputFormatter: null,
    outputFormatter: null,
    errors: null,
    errorPrefix: 'Failed to get state finality checkpoints:'
  }, {
    name: 'getValidators',
    route: 'states/${stateId}/validators',
    restMethod: 'get',
    inputFormatter: null,
    outputFormatter: null,
    errors: null,
    errorPrefix: 'Failed to get state validators:'
  }, {
    name: 'getValidatorById',
    route: 'states/${stateId}/validators/${validatorId}',
    restMethod: 'get',
    inputFormatter: null,
    outputFormatter: null,
    errors: null,
    errorPrefix: 'Failed to validator from state by id:'
  }, {
    name: 'getValidatorBalances',
    route: 'states/${stateId}/validator_balances',
    restMethod: 'get',
    inputFormatter: null,
    outputFormatter: null,
    errors: null,
    errorPrefix: 'Failed to validator balances from state:'
  }, {
    name: 'getEpochCommittees',
    route: 'states/${stateId}/committees/${epoch}',
    restMethod: 'get',
    inputFormatter: null,
    outputFormatter: null,
    errors: null,
    errorPrefix: 'Failed to committees for epoch:'
  }, {
    name: 'getBlockHeaders',
    route: 'headers',
    restMethod: 'get',
    inputFormatter: null,
    outputFormatter: null,
    errors: null,
    errorPrefix: 'Failed to block headers:'
  }, {
    name: 'getBlockHeader',
    route: 'headers/${blockId}',
    restMethod: 'get',
    inputFormatter: null,
    outputFormatter: null,
    errors: null,
    errorPrefix: 'Failed to get block header:'
  }, {
    name: 'publishSignedBlock',
    route: 'blocks',
    restMethod: 'post',
    inputFormatter: null,
    outputFormatter: null,
    errors: null,
    errorPrefix: 'Failed to publish signed block:'
  }, {
    name: 'getBlock',
    route: 'blocks/${blockId}',
    restMethod: 'get',
    inputFormatter: null,
    outputFormatter: null,
    errors: null,
    errorPrefix: 'Failed to get block:'
  }, {
    name: 'getBlockRoot',
    route: 'blocks/${blockId}/root',
    restMethod: 'get',
    inputFormatter: null,
    outputFormatter: null,
    errors: null,
    errorPrefix: 'Failed to get block root:'
  }, {
    name: 'getBlockAttestations',
    route: 'blocks/${blockId}/attestations',
    restMethod: 'get',
    inputFormatter: null,
    outputFormatter: null,
    errors: null,
    errorPrefix: 'Failed to block attestations:'
  }, {
    name: 'getAttestationsFromPool',
    route: 'pool/attestations',
    restMethod: 'get',
    inputFormatter: null,
    outputFormatter: null,
    errors: null,
    errorPrefix: 'Failed to attestations from operations pool:'
  }, {
    name: 'submitAttestation',
    route: 'pool/attestations',
    restMethod: 'post',
    inputFormatter: null,
    outputFormatter: null,
    errors: null,
    errorPrefix: 'Failed to submit attestations to operations pool:'
  }, {
    name: 'getAttesterSlashings',
    route: 'pool/attester_slashings',
    restMethod: 'get',
    inputFormatter: null,
    outputFormatter: null,
    errors: null,
    errorPrefix: 'Failed to get attester slashings from operations pool:'
  }, {
    name: 'submitAttesterSlashings',
    route: 'pool/attester_slashings',
    restMethod: 'post',
    inputFormatter: null,
    outputFormatter: null,
    errors: null,
    errorPrefix: 'Failed to submit attester slashings to operations pool:'
  }, {
    name: 'getProposerSlashings',
    route: 'pool/proposer_slashings',
    restMethod: 'get',
    inputFormatter: null,
    outputFormatter: null,
    errors: null,
    errorPrefix: 'Failed to get proposer slashings from operations pool:'
  }, {
    name: 'submitProposerSlashings',
    route: 'pool/proposer_slashings',
    restMethod: 'post',
    inputFormatter: null,
    outputFormatter: null,
    errors: null,
    errorPrefix: 'Failed to submit proposer slashings to operations pool:'
  }, {
    name: 'getSignedVoluntaryExits',
    route: 'pool/voluntary_exits',
    restMethod: 'get',
    inputFormatter: null,
    outputFormatter: null,
    errors: null,
    errorPrefix: 'Failed to get signed voluntary exits from operations pool'
  }, {
    name: 'submitVoluntaryExit',
    route: 'pool/voluntary_exits',
    restMethod: 'post',
    inputFormatter: null,
    outputFormatter: null,
    errors: null,
    errorPrefix: 'Failed to submit voluntary exit to operations pool:'
  }]
};
exports.DefaultSchema = DefaultSchema;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zY2hlbWEudHMiXSwibmFtZXMiOlsiRGVmYXVsdFNjaGVtYSIsInBhY2thZ2VOYW1lIiwicm91dGVQcmVmaXgiLCJtZXRob2RzIiwibmFtZSIsInJvdXRlIiwicmVzdE1ldGhvZCIsImlucHV0Rm9ybWF0dGVyIiwib3V0cHV0Rm9ybWF0dGVyIiwiZXJyb3JzIiwiZXJyb3JQcmVmaXgiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVPLElBQU1BLGFBQTRCLEdBQUc7QUFDeENDLEVBQUFBLFdBQVcsRUFBRSxrQkFEMkI7QUFFeENDLEVBQUFBLFdBQVcsRUFBRSxpQkFGMkI7QUFHeENDLEVBQUFBLE9BQU8sRUFBRSxDQUNMO0FBQ0lDLElBQUFBLElBQUksRUFBRSxZQURWO0FBRUlDLElBQUFBLEtBQUssRUFBRSxTQUZYO0FBR0lDLElBQUFBLFVBQVUsRUFBRSxLQUhoQjtBQUlJQyxJQUFBQSxjQUFjLEVBQUUsSUFKcEI7QUFLSUMsSUFBQUEsZUFBZSxFQUFFLElBTHJCO0FBTUlDLElBQUFBLE1BQU0sRUFBRSxJQU5aO0FBT0lDLElBQUFBLFdBQVcsRUFBRTtBQVBqQixHQURLLEVBVUw7QUFDSU4sSUFBQUEsSUFBSSxFQUFFLGFBRFY7QUFFSUMsSUFBQUEsS0FBSyxFQUFFLHdCQUZYO0FBR0lDLElBQUFBLFVBQVUsRUFBRSxLQUhoQjtBQUlJQyxJQUFBQSxjQUFjLEVBQUUsSUFKcEI7QUFLSUMsSUFBQUEsZUFBZSxFQUFFLElBTHJCO0FBTUlDLElBQUFBLE1BQU0sRUFBRSxJQU5aO0FBT0lDLElBQUFBLFdBQVcsRUFBRTtBQVBqQixHQVZLLEVBbUJMO0FBQ0lOLElBQUFBLElBQUksRUFBRSxhQURWO0FBRUlDLElBQUFBLEtBQUssRUFBRSx3QkFGWDtBQUdJQyxJQUFBQSxVQUFVLEVBQUUsS0FIaEI7QUFJSUMsSUFBQUEsY0FBYyxFQUFFLElBSnBCO0FBS0lDLElBQUFBLGVBQWUsRUFBRSxJQUxyQjtBQU1JQyxJQUFBQSxNQUFNLEVBQUUsSUFOWjtBQU9J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c0JBRlg7QUFHSUMsSUFBQUEsVUFBVSxFQUFFLEtBSGhCO0FBSUlDLElBQUFBLGNBQWMsRUFBRSxJQUpwQjtBQUtJQyxJQUFBQSxlQUFlLEVBQUUsSUFMckI7QUFNSUMsSUFBQUEsTUFBTSxFQUFFLElBTlo7QUFPSUMsSUFBQUEsV0FBVyxFQUFFO0FBUGpCLEdBckxLLEVBOExMO0FBQ0lOLElBQUFBLElBQUksRUFBRSxxQkFEVjtBQUVJQyxJQUFBQSxLQUFLLEVBQUUsc0JBRlg7QUFHSUMsSUFBQUEsVUFBVSxFQUFFLE1BSGhCO0FBSUlDLElBQUFBLGNBQWMsRUFBRSxJQUpwQjtBQUtJQyxJQUFBQSxlQUFlLEVBQUUsSUFMckI7QUFNSUMsSUFBQUEsTUFBTSxFQUFFLElBTlo7QUFPSUMsSUFBQUEsV0FBVyxFQUFFO0FBUGpCLEdBOUxLO0FBSCtCLENBQXJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZUFQSVNjaGVtYSB9IGZyb20gJ3hkYzMtZXRoMi1jb3JlMidcblxuZXhwb3J0IGNvbnN0IERlZmF1bHRTY2hlbWE6IEJhc2VBUElTY2hlbWEgPSB7XG4gICAgcGFja2FnZU5hbWU6ICdldGgyLWJlYWNvbmNoYWluJyxcbiAgICByb3V0ZVByZWZpeDogJy9ldGgvdjEvYmVhY29uLycsXG4gICAgbWV0aG9kczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnZ2V0R2VuZXNpcycsXG4gICAgICAgICAgICByb3V0ZTogJ2dlbmVzaXMnLFxuICAgICAgICAgICAgcmVzdE1ldGhvZDogJ2dldCcsXG4gICAgICAgICAgICBpbnB1dEZvcm1hdHRlcjogbnVsbCxcbiAgICAgICAgICAgIG91dHB1dEZvcm1hdHRlcjogbnVsbCxcbiAgICAgICAgICAgIGVycm9yczogbnVsbCxcbiAgICAgICAgICAgIGVycm9yUHJlZml4OiAnRmFpbGVkIHRvIGdldCBnZW5lc2lzIGJsb2NrOidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2dldEhhc2hSb290JyxcbiAgICAgICAgICAgIHJvdXRlOiAnc3RhdGVzLyR7c3RhdGVJZH0vcm9vdCcsXG4gICAgICAgICAgICByZXN0TWV0aG9kOiAnZ2V0JyxcbiAgICAgICAgICAgIGlucHV0Rm9ybWF0dGVyOiBudWxsLFxuICAgICAgICAgICAgb3V0cHV0Rm9ybWF0dGVyOiBudWxsLFxuICAgICAgICAgICAgZXJyb3JzOiBudWxsLFxuICAgICAgICAgICAgZXJyb3JQcmVmaXg6ICdGYWlsZWQgdG8gZ2V0IHN0YXRlIGhhc2ggdHJlZSByb290OidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2dldEZvcmtEYXRhJyxcbiAgICAgICAgICAgIHJvdXRlOiAnc3RhdGVzLyR7c3RhdGVJZH0vZm9yaycsXG4gICAgICAgICAgICByZXN0TWV0aG9kOiAnZ2V0JyxcbiAgICAgICAgICAgIGlucHV0Rm9ybWF0dGVyOiBudWxsLFxuICAgICAgICAgICAgb3V0cHV0Rm9ybWF0dGVyOiBudWxsLFxuICAgICAgICAgICAgZXJyb3JzOiBudWxsLFxuICAgICAgICAgICAgZXJyb3JQcmVmaXg6ICdGYWlsZWQgdG8gZ2V0IGZvcmsgb2JqZWN0IGZvciBzdGF0ZTonXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdnZXRGaW5hbGl0eUNoZWNrcG9pbnQnLFxuICAgICAgICAgICAgcm91dGU6ICdzdGF0ZXMvJHtzdGF0ZUlkfS9maW5hbGl0eV9jaGVja3BvaW50cycsXG4gICAgICAgICAgICByZXN0TWV0aG9kOiAnZ2V0JyxcbiAgICAgICAgICAgIGlucHV0Rm9ybWF0dGVyOiBudWxsLFxuICAgICAgICAgICAgb3V0cHV0Rm9ybWF0dGVyOiBudWxsLFxuICAgICAgICAgICAgZXJyb3JzOiBudWxsLFxuICAgICAgICAgICAgZXJyb3JQcmVmaXg6ICdGYWlsZWQgdG8gZ2V0IHN0YXRlIGZpbmFsaXR5IGNoZWNrcG9pbnRzOidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2dldFZhbGlkYXRvcnMnLFxuICAgICAgICAgICAgcm91dGU6ICdzdGF0ZXMvJHtzdGF0ZUlkfS92YWxpZGF0b3JzJyxcbiAgICAgICAgICAgIHJlc3RNZXRob2Q6ICdnZXQnLFxuICAgICAgICAgICAgaW5wdXRGb3JtYXR0ZXI6IG51bGwsXG4gICAgICAgICAgICBvdXRwdXRGb3JtYXR0ZXI6IG51bGwsXG4gICAgICAgICAgICBlcnJvcnM6IG51bGwsXG4gICAgICAgICAgICBlcnJvclByZWZpeDogJ0ZhaWxlZCB0byBnZXQgc3RhdGUgdmFsaWRhdG9yczonXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdnZXRWYWxpZGF0b3JCeUlkJyxcbiAgICAgICAgICAgIHJvdXRlOiAnc3RhdGVzLyR7c3RhdGVJZH0vdmFsaWRhdG9ycy8ke3ZhbGlkYXRvcklkfScsXG4gICAgICAgICAgICByZXN0TWV0aG9kOiAnZ2V0JyxcbiAgICAgICAgICAgIGlucHV0Rm9ybWF0dGVyOiBudWxsLFxuICAgICAgICAgICAgb3V0cHV0Rm9ybWF0dGVyOiBudWxsLFxuICAgICAgICAgICAgZXJyb3JzOiBudWxsLFxuICAgICAgICAgICAgZXJyb3JQcmVmaXg6ICdGYWlsZWQgdG8gdmFsaWRhdG9yIGZyb20gc3RhdGUgYnkgaWQ6J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnZ2V0VmFsaWRhdG9yQmFsYW5jZXMnLFxuICAgICAgICAgICAgcm91dGU6ICdzdGF0ZXMvJHtzdGF0ZUlkfS92YWxpZGF0b3JfYmFsYW5jZXMnLFxuICAgICAgICAgICAgcmVzdE1ldGhvZDogJ2dldCcsXG4gICAgICAgICAgICBpbnB1dEZvcm1hdHRlcjogbnVsbCxcbiAgICAgICAgICAgIG91dHB1dEZvcm1hdHRlcjogbnVsbCxcbiAgICAgICAgICAgIGVycm9yczogbnVsbCxcbiAgICAgICAgICAgIGVycm9yUHJlZml4OiAnRmFpbGVkIHRvIHZhbGlkYXRvciBiYWxhbmNlcyBmcm9tIHN0YXRlOidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2dldEVwb2NoQ29tbWl0dGVlcycsXG4gICAgICAgICAgICByb3V0ZTogJ3N0YXRlcy8ke3N0YXRlSWR9L2NvbW1pdHRlZXMvJHtlcG9jaH0nLFxuICAgICAgICAgICAgcmVzdE1ldGhvZDogJ2dldCcsXG4gICAgICAgICAgICBpbnB1dEZvcm1hdHRlcjogbnVsbCxcbiAgICAgICAgICAgIG91dHB1dEZvcm1hdHRlcjogbnVsbCxcbiAgICAgICAgICAgIGVycm9yczogbnVsbCxcbiAgICAgICAgICAgIGVycm9yUHJlZml4OiAnRmFpbGVkIHRvIGNvbW1pdHRlZXMgZm9yIGVwb2NoOidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2dldEJsb2NrSGVhZGVycycsXG4gICAgICAgICAgICByb3V0ZTogJ2hlYWRlcnMnLFxuICAgICAgICAgICAgcmVzdE1ldGhvZDogJ2dldCcsXG4gICAgICAgICAgICBpbnB1dEZvcm1hdHRlcjogbnVsbCxcbiAgICAgICAgICAgIG91dHB1dEZvcm1hdHRlcjogbnVsbCxcbiAgICAgICAgICAgIGVycm9yczogbnVsbCxcbiAgICAgICAgICAgIGVycm9yUHJlZml4OiAnRmFpbGVkIHRvIGJsb2NrIGhlYWRlcnM6J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnZ2V0QmxvY2tIZWFkZXInLFxuICAgICAgICAgICAgcm91dGU6ICdoZWFkZXJzLyR7YmxvY2tJZH0nLFxuICAgICAgICAgICAgcmVzdE1ldGhvZDogJ2dldCcsXG4gICAgICAgICAgICBpbnB1dEZvcm1hdHRlcjogbnVsbCxcbiAgICAgICAgICAgIG91dHB1dEZvcm1hdHRlcjogbnVsbCxcbiAgICAgICAgICAgIGVycm9yczogbnVsbCxcbiAgICAgICAgICAgIGVycm9yUHJlZml4OiAnRmFpbGVkIHRvIGdldCBibG9jayBoZWFkZXI6J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAncHVibGlzaFNpZ25lZEJsb2NrJyxcbiAgICAgICAgICAgIHJvdXRlOiAnYmxvY2tzJyxcbiAgICAgICAgICAgIHJlc3RNZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgICAgIGlucHV0Rm9ybWF0dGVyOiBudWxsLFxuICAgICAgICAgICAgb3V0cHV0Rm9ybWF0dGVyOiBudWxsLFxuICAgICAgICAgICAgZXJyb3JzOiBudWxsLFxuICAgICAgICAgICAgZXJyb3JQcmVmaXg6ICdGYWlsZWQgdG8gcHVibGlzaCBzaWduZWQgYmxvY2s6J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnZ2V0QmxvY2snLFxuICAgICAgICAgICAgcm91dGU6ICdibG9ja3MvJHtibG9ja0lkfScsXG4gICAgICAgICAgICByZXN0TWV0aG9kOiAnZ2V0JyxcbiAgICAgICAgICAgIGlucHV0Rm9ybWF0dGVyOiBudWxsLFxuICAgICAgICAgICAgb3V0cHV0Rm9ybWF0dGVyOiBudWxsLFxuICAgICAgICAgICAgZXJyb3JzOiBudWxsLFxuICAgICAgICAgICAgZXJyb3JQcmVmaXg6ICdGYWlsZWQgdG8gZ2V0IGJsb2NrOidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2dldEJsb2NrUm9vdCcsXG4gICAgICAgICAgICByb3V0ZTogJ2Jsb2Nrcy8ke2Jsb2NrSWR9L3Jvb3QnLFxuICAgICAgICAgICAgcmVzdE1ldGhvZDogJ2dldCcsXG4gICAgICAgICAgICBpbnB1dEZvcm1hdHRlcjogbnVsbCxcbiAgICAgICAgICAgIG91dHB1dEZvcm1hdHRlcjogbnVsbCxcbiAgICAgICAgICAgIGVycm9yczogbnVsbCxcbiAgICAgICAgICAgIGVycm9yUHJlZml4OiAnRmFpbGVkIHRvIGdldCBibG9jayByb290OidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ2dldEJsb2NrQXR0ZXN0YXRpb25zJyxcbiAgICAgICAgICAgIHJvdXRlOiAnYmxvY2tzLyR7YmxvY2tJZH0vYXR0ZXN0YXRpb25zJyxcbiAgICAgICAgICAgIHJlc3RNZXRob2Q6ICdnZXQnLFxuICAgICAgICAgICAgaW5wdXRGb3JtYXR0ZXI6IG51bGwsXG4gICAgICAgICAgICBvdXRwdXRGb3JtYXR0ZXI6IG51bGwsXG4gICAgICAgICAgICBlcnJvcnM6IG51bGwsXG4gICAgICAgICAgICBlcnJvclByZWZpeDogJ0ZhaWxlZCB0byBibG9jayBhdHRlc3RhdGlvbnM6J1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAnZ2V0QXR0ZXN0YXRpb25zRnJvbVBvb2wnLFxuICAgICAgICAgICAgcm91dGU6ICdwb29sL2F0dGVzdGF0aW9ucycsXG4gICAgICAgICAgICByZXN0TWV0aG9kOiAnZ2V0JyxcbiAgICAgICAgICAgIGlucHV0Rm9ybWF0dGVyOiBudWxsLFxuICAgICAgICAgICAgb3V0cHV0Rm9ybWF0dGVyOiBudWxsLFxuICAgICAgICAgICAgZXJyb3JzOiBudWxsLFxuICAgICAgICAgICAgZXJyb3JQcmVmaXg6ICdGYWlsZWQgdG8gYXR0ZXN0YXRpb25zIGZyb20gb3BlcmF0aW9ucyBwb29sOidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ3N1Ym1pdEF0dGVzdGF0aW9uJyxcbiAgICAgICAgICAgIHJvdXRlOiAncG9vbC9hdHRlc3RhdGlvbnMnLFxuICAgICAgICAgICAgcmVzdE1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICAgICAgaW5wdXRGb3JtYXR0ZXI6IG51bGwsXG4gICAgICAgICAgICBvdXRwdXRGb3JtYXR0ZXI6IG51bGwsXG4gICAgICAgICAgICBlcnJvcnM6IG51bGwsXG4gICAgICAgICAgICBlcnJvclByZWZpeDogJ0ZhaWxlZCB0byBzdWJtaXQgYXR0ZXN0YXRpb25zIHRvIG9wZXJhdGlvbnMgcG9vbDonXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdnZXRBdHRlc3RlclNsYXNoaW5ncycsXG4gICAgICAgICAgICByb3V0ZTogJ3Bvb2wvYXR0ZXN0ZXJfc2xhc2hpbmdzJyxcbiAgICAgICAgICAgIHJlc3RNZXRob2Q6ICdnZXQnLFxuICAgICAgICAgICAgaW5wdXRGb3JtYXR0ZXI6IG51bGwsXG4gICAgICAgICAgICBvdXRwdXRGb3JtYXR0ZXI6IG51bGwsXG4gICAgICAgICAgICBlcnJvcnM6IG51bGwsXG4gICAgICAgICAgICBlcnJvclByZWZpeDogJ0ZhaWxlZCB0byBnZXQgYXR0ZXN0ZXIgc2xhc2hpbmdzIGZyb20gb3BlcmF0aW9ucyBwb29sOidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ3N1Ym1pdEF0dGVzdGVyU2xhc2hpbmdzJyxcbiAgICAgICAgICAgIHJvdXRlOiAncG9vbC9hdHRlc3Rlcl9zbGFzaGluZ3MnLFxuICAgICAgICAgICAgcmVzdE1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICAgICAgaW5wdXRGb3JtYXR0ZXI6IG51bGwsXG4gICAgICAgICAgICBvdXRwdXRGb3JtYXR0ZXI6IG51bGwsXG4gICAgICAgICAgICBlcnJvcnM6IG51bGwsXG4gICAgICAgICAgICBlcnJvclByZWZpeDogJ0ZhaWxlZCB0byBzdWJtaXQgYXR0ZXN0ZXIgc2xhc2hpbmdzIHRvIG9wZXJhdGlvbnMgcG9vbDonXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdnZXRQcm9wb3NlclNsYXNoaW5ncycsXG4gICAgICAgICAgICByb3V0ZTogJ3Bvb2wvcHJvcG9zZXJfc2xhc2hpbmdzJyxcbiAgICAgICAgICAgIHJlc3RNZXRob2Q6ICdnZXQnLFxuICAgICAgICAgICAgaW5wdXRGb3JtYXR0ZXI6IG51bGwsXG4gICAgICAgICAgICBvdXRwdXRGb3JtYXR0ZXI6IG51bGwsXG4gICAgICAgICAgICBlcnJvcnM6IG51bGwsXG4gICAgICAgICAgICBlcnJvclByZWZpeDogJ0ZhaWxlZCB0byBnZXQgcHJvcG9zZXIgc2xhc2hpbmdzIGZyb20gb3BlcmF0aW9ucyBwb29sOidcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ3N1Ym1pdFByb3Bvc2VyU2xhc2hpbmdzJyxcbiAgICAgICAgICAgIHJvdXRlOiAncG9vbC9wcm9wb3Nlcl9zbGFzaGluZ3MnLFxuICAgICAgICAgICAgcmVzdE1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICAgICAgaW5wdXRGb3JtYXR0ZXI6IG51bGwsXG4gICAgICAgICAgICBvdXRwdXRGb3JtYXR0ZXI6IG51bGwsXG4gICAgICAgICAgICBlcnJvcnM6IG51bGwsXG4gICAgICAgICAgICBlcnJvclByZWZpeDogJ0ZhaWxlZCB0byBzdWJtaXQgcHJvcG9zZXIgc2xhc2hpbmdzIHRvIG9wZXJhdGlvbnMgcG9vbDonXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdnZXRTaWduZWRWb2x1bnRhcnlFeGl0cycsXG4gICAgICAgICAgICByb3V0ZTogJ3Bvb2wvdm9sdW50YXJ5X2V4aXRzJyxcbiAgICAgICAgICAgIHJlc3RNZXRob2Q6ICdnZXQnLFxuICAgICAgICAgICAgaW5wdXRGb3JtYXR0ZXI6IG51bGwsXG4gICAgICAgICAgICBvdXRwdXRGb3JtYXR0ZXI6IG51bGwsXG4gICAgICAgICAgICBlcnJvcnM6IG51bGwsXG4gICAgICAgICAgICBlcnJvclByZWZpeDogJ0ZhaWxlZCB0byBnZXQgc2lnbmVkIHZvbHVudGFyeSBleGl0cyBmcm9tIG9wZXJhdGlvbnMgcG9vbCdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ3N1Ym1pdFZvbHVudGFyeUV4aXQnLFxuICAgICAgICAgICAgcm91dGU6ICdwb29sL3ZvbHVudGFyeV9leGl0cycsXG4gICAgICAgICAgICByZXN0TWV0aG9kOiAncG9zdCcsXG4gICAgICAgICAgICBpbnB1dEZvcm1hdHRlcjogbnVsbCxcbiAgICAgICAgICAgIG91dHB1dEZvcm1hdHRlcjogbnVsbCxcbiAgICAgICAgICAgIGVycm9yczogbnVsbCxcbiAgICAgICAgICAgIGVycm9yUHJlZml4OiAnRmFpbGVkIHRvIHN1Ym1pdCB2b2x1bnRhcnkgZXhpdCB0byBvcGVyYXRpb25zIHBvb2w6J1xuICAgICAgICB9LFxuICAgIF1cbn1cbiJdfQ==