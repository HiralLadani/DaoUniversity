import React, { useState } from "react";
import "./DAO.css";
import Navbar from "../components/Navbar";

const DAO = () => {
  const [proposals, setProposals] = useState([
    {
      id: 1,
      title: "Reduce transaction fees by 10%",
      description: "A proposal to lower fees and attract more users.",
      votesFor: 12,
      votesAgainst: 3,
      status: "active",
    },
    {
      id: 2,
      title: "Launch NFT marketplace",
      description: "A proposal to launch a native NFT marketplace.",
      votesFor: 8,
      votesAgainst: 6,
      status: "closed",
    },
  ]);

  const [newProposal, setNewProposal] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setNewProposal({ ...newProposal, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newProposal.title || !newProposal.description) return;

    const next = {
      id: Date.now(),
      title: newProposal.title,
      description: newProposal.description,
      votesFor: 0,
      votesAgainst: 0,
      status: "active",
    };

    setProposals([next, ...proposals]);
    setNewProposal({ title: "", description: "" });
  };

  const handleVote = (id, type) => {
    setProposals(
      proposals.map((p) =>
        p.id === id
          ? {
              ...p,
              votesFor: type === "for" ? p.votesFor + 1 : p.votesFor,
              votesAgainst: type === "against" ? p.votesAgainst + 1 : p.votesAgainst,
            }
          : p
      )
    );
  };

  return (
    <>
      <div className="dao-page">
        <h1>DAO Governance</h1>
        <p className="subtitle">
          Submit proposals and vote on platform decisions here.
        </p>

        <form className="proposal-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Proposal Title"
            value={newProposal.title}
            onChange={handleChange}
          />
          <textarea
            name="description"
            placeholder="Proposal Description"
            rows="3"
            value={newProposal.description}
            onChange={handleChange}
          />
          <button type="submit">Submit Proposal</button>
        </form>

        <div className="proposal-list">
          {proposals.map((p) => (
            <div key={p.id} className="proposal-card">
              <h2>{p.title}</h2>
              <p>{p.description}</p>
              <div className="proposal-meta">
                <span
                  className={`status ${p.status === "active" ? "active" : "closed"}`}
                >
                  {p.status === "active" ? "Active" : "Closed"}
                </span>
                <div className="votes">
                  👍 {p.votesFor} | 👎 {p.votesAgainst}
                </div>
              </div>
              {p.status === "active" && (
                <div className="vote-buttons">
                  <button onClick={() => handleVote(p.id, "for")}>Vote For</button>
                  <button onClick={() => handleVote(p.id, "against")}>
                    Vote Against
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DAO;
