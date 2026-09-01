"use client";

import { motion } from "framer-motion";

const nodes = [
  { id: "query", label: "Query", x: 40, y: 40, color: "#F2C983" },
  { id: "router", label: "Router", x: 200, y: 40, color: "#A79CFB" },
  { id: "retriever", label: "Vector Retriever", x: 200, y: 160, color: "#A79CFB" },
  { id: "research", label: "Research Agent", x: 380, y: 20, color: "#7C6FF2" },
  { id: "analysis", label: "Analysis Agent", x: 380, y: 90, color: "#7C6FF2" },
  { id: "synthesis", label: "Synthesis Agent", x: 380, y: 160, color: "#7C6FF2" },
  { id: "answer", label: "Answer", x: 540, y: 90, color: "#E7A94C" },
];

const edges = [
  ["query", "router"],
  ["router", "retriever"],
  ["router", "research"],
  ["retriever", "analysis"],
  ["research", "synthesis"],
  ["analysis", "synthesis"],
  ["synthesis", "answer"],
];

const findNode = (id: string) => nodes.find((n) => n.id === id)!;

export default function AgentTrace() {
  return (
    <div className="relative w-full max-w-[620px]">
      <svg
        viewBox="0 0 600 210"
        className="w-full h-auto overflow-visible"
        role="img"
        aria-label="Diagram of a query flowing through a router, retriever, and specialized agents to an answer"
      >
        {edges.map(([from, to], i) => {
          const a = findNode(from);
          const b = findNode(to);
          return (
            <motion.line
              key={`${from}-${to}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="url(#lineGradient)"
              strokeWidth={1.5}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.7 }}
              transition={{
                duration: 1.1,
                delay: 0.3 + i * 0.22,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 3.4,
              }}
            />
          );
        })}

        <defs>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#E7A94C" />
            <stop offset="100%" stopColor="#7C6FF2" />
          </linearGradient>
        </defs>

        {nodes.map((n, i) => (
          <g key={n.id}>
            <motion.circle
              cx={n.x}
              cy={n.y}
              r={5.5}
              fill={n.color}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.12 }}
            />
            <motion.circle
              cx={n.x}
              cy={n.y}
              r={5.5}
              fill="none"
              stroke={n.color}
              strokeWidth={1}
              initial={{ scale: 1, opacity: 0.6 }}
              animate={{ scale: [1, 2.4], opacity: [0.5, 0] }}
              transition={{
                duration: 1.8,
                delay: 1 + i * 0.18,
                repeat: Infinity,
                repeatDelay: 2.6,
                ease: "easeOut",
              }}
            />
            <motion.text
              x={n.x}
              y={n.y - 14}
              textAnchor={n.x > 460 ? "end" : n.x < 60 ? "start" : "middle"}
              className="font-mono"
              fontSize="10"
              fill="#8B92AE"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 + i * 0.12 }}
            >
              {n.label}
            </motion.text>
          </g>
        ))}
      </svg>
      <p className="mt-4 font-mono text-[11px] text-ink-faint text-center sm:text-left">
        // how a question moves through an agentic RAG system
      </p>
    </div>
  );
}
