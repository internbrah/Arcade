"use client";

type Props = {
  onClick: () => void;
};

export default function CreateChallengeButton({ onClick }: Props) {
  return (
    <button className="secondary" onClick={onClick}>
      Create Challenge
    </button>
  );
}
