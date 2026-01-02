import { version, exchanges } from 'ccxt';

const exchangeKeys = Object.keys(exchanges);

export function getCcxtInfo() {
  return {
    version,
    exchangeCount: exchangeKeys.length,
    exchanges: exchangeKeys,
  };
}

export function isValidExchange(exchangeId) {
    return exchangeKeys.includes(exchangeId);
}

export function loadExchangeClass(exchangeId) {
    if (!isValidExchange(exchangeId)) {
        throw new Error(`Exchange "${exchangeId}" is not supported.`);
    }
    return exchanges[exchangeId];
}

export function createExchangeInstance(exchangeId, config = {}) {
    const ExchangeClass = loadExchangeClass(exchangeId);
    return new ExchangeClass(config);
}