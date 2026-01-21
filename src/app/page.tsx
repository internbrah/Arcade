"use client";

import WalletStatus from "../components/WalletStatus";
import PendingChallenges from "../components/PendingChallenges";
import SudokuGame from "../components/SudokuGame";
import CreateChallengeButton from "../components/CreateChallengeButton";
import CreateChallengeModal from "../components/CreateChallengeModal";
import RefundPanel from "../components/RefundPanel";
import { useState } from "react";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="container grid">
      <section className="stack">
        <header className="card hero-card">
          <h1>Onchain Arcade</h1>
          <p className="muted">Connect your wallet to see incoming wagers.</p>
        </header>
        <WalletStatus />
        <CreateChallengeButton onClick={() => setIsModalOpen(true)} />
        <CreateChallengeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        <SudokuGame />
        <RefundPanel />
      </section>
      <PendingChallenges />
    </main>
  );
}
