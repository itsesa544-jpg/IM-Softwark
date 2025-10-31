import React, { useState } from 'react';
import { CopyIcon, CheckIcon } from './Icons';

const Donation: React.FC = () => {
    const [copied, setCopied] = useState<string | null>(null);
    const paymentNumber = '01753567152'; // For bKash and Nagad
    const bybitAddress = 'UQCsXukK5H2phbxEUFMGO4h9uoSULrMp-Gt5ZJXuRyMCGimL'; // For Bybit
    const binanceAddress = 'UQCLYlEjOcNKpi2L_y2OFlh7LqGqRnntSbbn-KVZ-JV_LmK-'; // For Binance
    const telegramId = 'UQC_LwLwW5tbv7CQ8yCS9I_CEIEHBR5eEkdHGWwtmig6Utqx'; // For Telegram

    const handleCopy = (service: string, valueToCopy: string) => {
        navigator.clipboard.writeText(valueToCopy);
        setCopied(service);
        setTimeout(() => {
            setCopied(null);
        }, 2000);
    };

    return (
        <section className="py-20 md:py-28 bg-gray-950">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        Donate / Payment
                        <span className="font-bengali text-2xl md:text-3xl text-gray-400 block mt-1">ডোনেট / পেমেন্ট</span>
                    </h2>
                </div>
                <div className="max-w-md mx-auto bg-gray-800 rounded-lg shadow-xl p-8 shadow-cyan-500/20">
                    <div className="space-y-6">
                        {['বিকাশ (bKash)', 'নগদ (Nagad)'].map((service) => (
                            <div key={service} className="flex items-center justify-between bg-gray-700 p-4 rounded-md">
                                <div>
                                    <p className="font-bengali text-lg text-white">{service}</p>
                                    <p className="text-lg font-mono text-gray-300 tracking-wider">{paymentNumber}</p>
                                </div>
                                <button
                                    onClick={() => handleCopy(service, paymentNumber)}
                                    className="p-2 rounded-md bg-gray-600 hover:bg-cyan-600 text-white transition-all duration-200"
                                    aria-label={`Copy ${service} number`}
                                >
                                    {copied === service ? (
                                        <CheckIcon className="h-6 w-6 text-green-400" />
                                    ) : (
                                        <CopyIcon className="h-6 w-6" />
                                    )}
                                </button>
                            </div>
                        ))}
                        {/* Bybit Payment Option */}
                        <div key="Bybit" className="flex items-center justify-between bg-gray-700 p-4 rounded-md">
                            <div>
                                <p className="text-lg text-white">Bybit (USDT TRC20)</p>
                                <p className="text-lg font-mono text-gray-300 tracking-wider break-all">{bybitAddress}</p>
                            </div>
                            <button
                                onClick={() => handleCopy('Bybit', bybitAddress)}
                                className="p-2 rounded-md bg-gray-600 hover:bg-cyan-600 text-white transition-all duration-200"
                                aria-label="Copy Bybit address"
                            >
                                {copied === 'Bybit' ? (
                                    <CheckIcon className="h-6 w-6 text-green-400" />
                                ) : (
                                    <CopyIcon className="h-6 w-6" />
                                )}
                            </button>
                        </div>
                        {/* Binance Payment Option */}
                        <div key="Binance" className="flex items-center justify-between bg-gray-700 p-4 rounded-md">
                            <div>
                                <p className="text-lg text-white">Binance (USDT TRC20)</p>
                                <p className="text-lg font-mono text-gray-300 tracking-wider break-all">{binanceAddress}</p>
                            </div>
                            <button
                                onClick={() => handleCopy('Binance', binanceAddress)}
                                className="p-2 rounded-md bg-gray-600 hover:bg-cyan-600 text-white transition-all duration-200"
                                aria-label="Copy Binance address"
                            >
                                {copied === 'Binance' ? (
                                    <CheckIcon className="h-6 w-6 text-green-400" />
                                ) : (
                                    <CopyIcon className="h-6 w-6" />
                                )}
                            </button>
                        </div>
                        {/* Telegram Payment Option */}
                        <div key="Telegram" className="flex items-center justify-between bg-gray-700 p-4 rounded-md">
                            <div>
                                <p className="text-lg text-white">Telegram (Username)</p>
                                <p className="text-lg font-mono text-gray-300 tracking-wider break-all">{telegramId}</p>
                            </div>
                            <button
                                onClick={() => handleCopy('Telegram', telegramId)}
                                className="p-2 rounded-md bg-gray-600 hover:bg-cyan-600 text-white transition-all duration-200"
                                aria-label="Copy Telegram ID"
                            >
                                {copied === 'Telegram' ? (
                                    <CheckIcon className="h-6 w-6 text-green-400" />
                                ) : (
                                    <CopyIcon className="h-6 w-6" />
                                )}
                            </button>
                        </div>
                    </div>
                    <div className="mt-8 pt-6 border-t border-gray-700 text-center">
                        <p className="text-lg text-gray-400">Account Name:</p>
                        <p className="text-2xl font-semibold text-white mt-1">Mohammad Esa Ali</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Donation;