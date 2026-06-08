import { useState, useEffect } from "react";

const initialData = [
  { day: 1, week: 1, topic: "Arrays — Basics & Two Pointers", problem: "Two Sum", platform: "LC", number: "#1", level: "Easy" },
  { day: 1, week: 1, topic: "Arrays — Basics & Two Pointers", problem: "Best Time to Buy and Sell Stock", platform: "LC", number: "#121", level: "Easy" },
  { day: 1, week: 1, topic: "Arrays — Basics & Two Pointers", problem: "Contains Duplicate", platform: "LC", number: "#217", level: "Easy" },
  { day: 2, week: 1, topic: "Arrays — Sliding Window", problem: "Maximum Subarray (Kadane's)", platform: "LC", number: "#53", level: "Medium" },
  { day: 2, week: 1, topic: "Arrays — Sliding Window", problem: "Max Sum Subarray of size K", platform: "GFG", number: "—", level: "Easy" },
  { day: 2, week: 1, topic: "Arrays — Sliding Window", problem: "Longest Subarray with Sum K", platform: "GFG", number: "—", level: "Medium" },
  { day: 3, week: 1, topic: "Arrays — Prefix Sum", problem: "Product of Array Except Self", platform: "LC", number: "#238", level: "Medium" },
  { day: 3, week: 1, topic: "Arrays — Prefix Sum", problem: "Subarray Sum Equals K", platform: "LC", number: "#560", level: "Medium" },
  { day: 3, week: 1, topic: "Arrays — Prefix Sum", problem: "Range Sum Query", platform: "LC", number: "#303", level: "Easy" },
  { day: 4, week: 1, topic: "Strings — Basics", problem: "Valid Anagram", platform: "LC", number: "#242", level: "Easy" },
  { day: 4, week: 1, topic: "Strings — Basics", problem: "Valid Palindrome", platform: "LC", number: "#125", level: "Easy" },
  { day: 4, week: 1, topic: "Strings — Basics", problem: "Longest Common Prefix", platform: "LC", number: "#14", level: "Easy" },
  { day: 5, week: 1, topic: "Strings — Sliding Window", problem: "Longest Substring Without Repeating Characters", platform: "LC", number: "#3", level: "Medium" },
  { day: 5, week: 1, topic: "Strings — Sliding Window", problem: "Minimum Window Substring", platform: "LC", number: "#76", level: "Hard" },
  { day: 5, week: 1, topic: "Strings — Sliding Window", problem: "Group Anagrams", platform: "LC", number: "#49", level: "Medium" },
  { day: 6, week: 1, topic: "Hashing & HashMaps", problem: "Majority Element", platform: "LC", number: "#169", level: "Easy" },
  { day: 6, week: 1, topic: "Hashing & HashMaps", problem: "Top K Frequent Elements", platform: "LC", number: "#347", level: "Medium" },
  { day: 6, week: 1, topic: "Hashing & HashMaps", problem: "Longest Consecutive Sequence", platform: "LC", number: "#128", level: "Medium" },
  { day: 7, week: 1, topic: "Review Day", problem: "3Sum", platform: "LC", number: "#15", level: "Medium" },
  { day: 7, week: 1, topic: "Review Day", problem: "Trapping Rain Water", platform: "LC", number: "#42", level: "Hard" },
  { day: 8, week: 2, topic: "Linked Lists — Basics", problem: "Reverse Linked List", platform: "LC", number: "#206", level: "Easy" },
  { day: 8, week: 2, topic: "Linked Lists — Basics", problem: "Merge Two Sorted Lists", platform: "LC", number: "#21", level: "Easy" },
  { day: 8, week: 2, topic: "Linked Lists — Basics", problem: "Linked List Cycle", platform: "LC", number: "#141", level: "Easy" },
  { day: 9, week: 2, topic: "Linked Lists — Medium", problem: "Remove Nth Node From End", platform: "LC", number: "#19", level: "Medium" },
  { day: 9, week: 2, topic: "Linked Lists — Medium", problem: "Reorder List", platform: "LC", number: "#143", level: "Medium" },
  { day: 9, week: 2, topic: "Linked Lists — Medium", problem: "Find the Duplicate Number", platform: "LC", number: "#287", level: "Medium" },
  { day: 10, week: 2, topic: "Stacks — Monotonic", problem: "Valid Parentheses", platform: "LC", number: "#20", level: "Easy" },
  { day: 10, week: 2, topic: "Stacks — Monotonic", problem: "Min Stack", platform: "LC", number: "#155", level: "Medium" },
  { day: 10, week: 2, topic: "Stacks — Monotonic", problem: "Daily Temperatures", platform: "LC", number: "#739", level: "Medium" },
  { day: 11, week: 2, topic: "Stacks — Advanced", problem: "Largest Rectangle in Histogram", platform: "LC", number: "#84", level: "Hard" },
  { day: 11, week: 2, topic: "Stacks — Advanced", problem: "Evaluate Reverse Polish Notation", platform: "LC", number: "#150", level: "Medium" },
  { day: 11, week: 2, topic: "Stacks — Advanced", problem: "Car Fleet", platform: "LC", number: "#853", level: "Medium" },
  { day: 12, week: 2, topic: "Queues & Deques", problem: "Sliding Window Maximum", platform: "LC", number: "#239", level: "Hard" },
  { day: 12, week: 2, topic: "Queues & Deques", problem: "Design Circular Queue", platform: "LC", number: "#622", level: "Medium" },
  { day: 12, week: 2, topic: "Queues & Deques", problem: "Number of Recent Calls", platform: "LC", number: "#933", level: "Easy" },
  { day: 13, week: 2, topic: "Binary Search — Basics", problem: "Binary Search", platform: "LC", number: "#704", level: "Easy" },
  { day: 13, week: 2, topic: "Binary Search — Basics", problem: "Search in Rotated Sorted Array", platform: "LC", number: "#33", level: "Medium" },
  { day: 13, week: 2, topic: "Binary Search — Basics", problem: "Find Minimum in Rotated Sorted Array", platform: "LC", number: "#153", level: "Medium" },
  { day: 14, week: 2, topic: "Binary Search — Advanced", problem: "Koko Eating Bananas", platform: "LC", number: "#875", level: "Medium" },
  { day: 14, week: 2, topic: "Binary Search — Advanced", problem: "Median of Two Sorted Arrays", platform: "LC", number: "#4", level: "Hard" },
  { day: 15, week: 3, topic: "Binary Trees — Traversals", problem: "Inorder / Preorder / Postorder", platform: "LC", number: "#94,144,145", level: "Easy" },
  { day: 15, week: 3, topic: "Binary Trees — Traversals", problem: "Level Order Traversal", platform: "LC", number: "#102", level: "Medium" },
  { day: 15, week: 3, topic: "Binary Trees — Traversals", problem: "Maximum Depth of Binary Tree", platform: "LC", number: "#104", level: "Easy" },
  { day: 16, week: 3, topic: "Binary Trees — Properties", problem: "Invert Binary Tree", platform: "LC", number: "#226", level: "Easy" },
  { day: 16, week: 3, topic: "Binary Trees — Properties", problem: "Symmetric Tree", platform: "LC", number: "#101", level: "Easy" },
  { day: 16, week: 3, topic: "Binary Trees — Properties", problem: "Diameter of Binary Tree", platform: "LC", number: "#543", level: "Easy" },
  { day: 17, week: 3, topic: "Binary Trees — Paths & LCA", problem: "Binary Tree Maximum Path Sum", platform: "LC", number: "#124", level: "Hard" },
  { day: 17, week: 3, topic: "Binary Trees — Paths & LCA", problem: "Lowest Common Ancestor of BST", platform: "LC", number: "#235", level: "Medium" },
  { day: 17, week: 3, topic: "Binary Trees — Paths & LCA", problem: "Path Sum II", platform: "LC", number: "#113", level: "Medium" },
  { day: 18, week: 3, topic: "BST", problem: "Validate Binary Search Tree", platform: "LC", number: "#98", level: "Medium" },
  { day: 18, week: 3, topic: "BST", problem: "Kth Smallest Element in a BST", platform: "LC", number: "#230", level: "Medium" },
  { day: 18, week: 3, topic: "BST", problem: "Insert into a BST", platform: "LC", number: "#701", level: "Medium" },
  { day: 19, week: 3, topic: "Recursion & Backtracking", problem: "Subsets", platform: "LC", number: "#78", level: "Medium" },
  { day: 19, week: 3, topic: "Recursion & Backtracking", problem: "Permutations", platform: "LC", number: "#46", level: "Medium" },
  { day: 19, week: 3, topic: "Recursion & Backtracking", problem: "Combination Sum", platform: "LC", number: "#39", level: "Medium" },
  { day: 20, week: 3, topic: "Backtracking — Advanced", problem: "Word Search", platform: "LC", number: "#79", level: "Medium" },
  { day: 20, week: 3, topic: "Backtracking — Advanced", problem: "N-Queens", platform: "LC", number: "#51", level: "Hard" },
  { day: 20, week: 3, topic: "Backtracking — Advanced", problem: "Sudoku Solver", platform: "LC", number: "#37", level: "Hard" },
  { day: 21, week: 3, topic: "Heaps & Priority Queues", problem: "Kth Largest Element in an Array", platform: "LC", number: "#215", level: "Medium" },
  { day: 21, week: 3, topic: "Heaps & Priority Queues", problem: "Find Median from Data Stream", platform: "LC", number: "#295", level: "Hard" },
  { day: 21, week: 3, topic: "Heaps & Priority Queues", problem: "Task Scheduler", platform: "LC", number: "#621", level: "Medium" },
  { day: 22, week: 4, topic: "Graphs — BFS & DFS", problem: "Number of Islands", platform: "LC", number: "#200", level: "Medium" },
  { day: 22, week: 4, topic: "Graphs — BFS & DFS", problem: "Clone Graph", platform: "LC", number: "#133", level: "Medium" },
  { day: 22, week: 4, topic: "Graphs — BFS & DFS", problem: "Rotting Oranges", platform: "LC", number: "#994", level: "Medium" },
  { day: 23, week: 4, topic: "Graphs — Topological Sort", problem: "Course Schedule", platform: "LC", number: "#207", level: "Medium" },
  { day: 23, week: 4, topic: "Graphs — Topological Sort", problem: "Course Schedule II", platform: "LC", number: "#210", level: "Medium" },
  { day: 23, week: 4, topic: "Graphs — Topological Sort", problem: "Pacific Atlantic Water Flow", platform: "LC", number: "#417", level: "Medium" },
  { day: 24, week: 4, topic: "Union Find & Dijkstra", problem: "Number of Connected Components", platform: "LC", number: "#323", level: "Medium" },
  { day: 24, week: 4, topic: "Union Find & Dijkstra", problem: "Redundant Connection", platform: "LC", number: "#684", level: "Medium" },
  { day: 24, week: 4, topic: "Union Find & Dijkstra", problem: "Network Delay Time", platform: "LC", number: "#743", level: "Medium" },
  { day: 25, week: 4, topic: "DP — 1D", problem: "Climbing Stairs", platform: "LC", number: "#70", level: "Easy" },
  { day: 25, week: 4, topic: "DP — 1D", problem: "House Robber", platform: "LC", number: "#198", level: "Medium" },
  { day: 25, week: 4, topic: "DP — 1D", problem: "Coin Change", platform: "LC", number: "#322", level: "Medium" },
  { day: 26, week: 4, topic: "DP — 2D", problem: "Unique Paths", platform: "LC", number: "#62", level: "Medium" },
  { day: 26, week: 4, topic: "DP — 2D", problem: "Longest Common Subsequence", platform: "LC", number: "#1143", level: "Medium" },
  { day: 26, week: 4, topic: "DP — 2D", problem: "Edit Distance", platform: "LC", number: "#72", level: "Medium" },
  { day: 27, week: 4, topic: "DP — Knapsack", problem: "0/1 Knapsack", platform: "GFG", number: "—", level: "Medium" },
  { day: 27, week: 4, topic: "DP — Knapsack", problem: "Partition Equal Subset Sum", platform: "LC", number: "#416", level: "Medium" },
  { day: 27, week: 4, topic: "DP — Knapsack", problem: "Burst Balloons", platform: "LC", number: "#312", level: "Hard" },
  { day: 28, week: 4, topic: "Sorting + Tries", problem: "Sort Colors (Dutch National Flag)", platform: "LC", number: "#75", level: "Medium" },
  { day: 28, week: 4, topic: "Sorting + Tries", problem: "Implement Trie", platform: "LC", number: "#208", level: "Medium" },
  { day: 28, week: 4, topic: "Sorting + Tries", problem: "Word Search II", platform: "LC", number: "#212", level: "Hard" },
  { day: 29, week: 4, topic: "Greedy Algorithms", problem: "Jump Game", platform: "LC", number: "#55", level: "Medium" },
  { day: 29, week: 4, topic: "Greedy Algorithms", problem: "Merge Intervals", platform: "LC", number: "#56", level: "Medium" },
  { day: 29, week: 4, topic: "Greedy Algorithms", problem: "Non-overlapping Intervals", platform: "LC", number: "#435", level: "Medium" },
  { day: 30, week: 4, topic: "Final Mock", problem: "LRU Cache", platform: "LC", number: "#146", level: "Medium" },
  { day: 30, week: 4, topic: "Final Mock", problem: "Word Ladder", platform: "LC", number: "#127", level: "Hard" },
  { day: 30, week: 4, topic: "Final Mock", problem: "Serialize and Deserialize Binary Tree", platform: "LC", number: "#297", level: "Hard" },
];

const STORAGE_KEY = "dsa-roadmap-progress";
const weekColors = { 1: "#1e6b3a", 2: "#1a3d6e", 3: "#5c1d8a", 4: "#7a3000" };
const weekBg     = { 1: "#e6f4ec", 2: "#e6eef8", 3: "#f0e6fa", 4: "#fdf0e6" };
const levelStyle = {
  Easy:   { background: "#c6efce", color: "#276221", fontWeight: 700 },
  Medium: { background: "#ffeb9c", color: "#9c5700", fontWeight: 700 },
  Hard:   { background: "#ffc7ce", color: "#9c0006", fontWeight: 700 },
};

export default function DSASheet() {
  const [done, setDone] = useState({});
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [saveStatus, setSaveStatus] = useState("");

  // Load from persistent storage on mount
useEffect(() => {
  try {
    const savedData = localStorage.getItem(STORAGE_KEY);

    if (savedData) {
      setDone(JSON.parse(savedData));
    }
  } catch (error) {
    console.error("Error loading progress:", error);
  } finally {
    setLoading(false);
  }
}, []);

useEffect(() => {
  if (!loading) {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(done)
    );
  }
}, [done, loading]);

useEffect(() => {
  if (saveStatus) {
    const timer = setTimeout(() => {
      setSaveStatus("");
    }, 2000);

    return () => clearTimeout(timer);
  }
}, [saveStatus]);
  
 const toggle = (key) => {
  setDone((prev) => ({
    ...prev,
    [key]: !prev[key],
  }));

  setSaveStatus("✔ Saved");
};

const resetAll = () => {
  if (!window.confirm("Reset all progress?")) return;

  setDone({});
  localStorage.removeItem(STORAGE_KEY);

  setSaveStatus("✔ Reset");
};

  const rows = initialData.map((r, i) => ({ ...r, key: i, isDone: !!done[i] }));
  const filtered = filter === "All" ? rows
    : filter === "Done"    ? rows.filter(r => r.isDone)
    : filter === "Pending" ? rows.filter(r => !r.isDone)
    : rows.filter(r => String(r.week) === filter);

  const total     = rows.length;
  const doneCount = rows.filter(r => r.isDone).length;
  const pct       = Math.round((doneCount / total) * 100);

  if (loading) return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", fontFamily: "Calibri, Arial, sans-serif", color: "#217346", fontSize: 14 }}>
      Loading your progress...
    </div>
  );

  return (
    <div style={{ fontFamily: "Calibri, Arial, sans-serif", fontSize: 13, background: "#f2f2f2", minHeight: "100vh", padding: 12 }}>

      {/* Title bar */}
      <div style={{ background: "#217346", color: "#fff", padding: "8px 14px", borderRadius: "4px 4px 0 0", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontWeight: 700, fontSize: 14 }}>📊 DSA Roadmap 30Days</span>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {saveStatus && <span style={{ fontSize: 11, opacity: 0.9, background: "rgba(255,255,255,0.2)", padding: "2px 8px", borderRadius: 3 }}>{saveStatus}</span>}
          <span style={{ fontSize: 12, opacity: 0.85 }}>{doneCount}/{total} solved ({pct}%)</span>
        </div>
      </div>

      {/* Toolbar */}
      <div style={{ background: "#fff", border: "1px solid #d0d0d0", borderTop: "none", padding: "6px 12px", display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
        <span style={{ fontSize: 11, color: "#666", marginRight: 4 }}>Filter:</span>
        {["All", "1", "2", "3", "4", "Done", "Pending"].map(f => (
          <button key={f} onClick={() => setFilter(f)} style={{
            padding: "3px 10px", fontSize: 11, cursor: "pointer", borderRadius: 2,
            border: filter === f ? "1px solid #217346" : "1px solid #ccc",
            background: filter === f ? "#e6f4ec" : "#fff",
            color: filter === f ? "#217346" : "#333",
            fontWeight: filter === f ? 700 : 400,
          }}>
            {f === "1" ? "Week 1" : f === "2" ? "Week 2" : f === "3" ? "Week 3" : f === "4" ? "Week 4" : f}
          </button>
        ))}

        <button onClick={resetAll} style={{ marginLeft: 8, padding: "3px 10px", fontSize: 11, cursor: "pointer", borderRadius: 2, border: "1px solid #e57373", background: "#fff5f5", color: "#c62828" }}>
          ↺ Reset
        </button>

        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 140, height: 14, background: "#e0e0e0", borderRadius: 2, overflow: "hidden", border: "1px solid #ccc" }}>
            <div style={{ height: "100%", width: `${pct}%`, background: "#217346", transition: "width 0.3s" }} />
          </div>
          <span style={{ fontSize: 11, color: "#217346", fontWeight: 700 }}>{pct}% complete</span>
        </div>
      </div>

      {/* Table */}
      <div style={{ overflowX: "auto", border: "1px solid #d0d0d0", borderTop: "none" }}>
        <table style={{ borderCollapse: "collapse", width: "100%", minWidth: 870 }}>
          <thead>
            <tr style={{ background: "#f2f2f2" }}>
              <th style={{ width: 32, borderRight: "1px solid #d0d0d0", borderBottom: "2px solid #bdbdbd" }} />
              {["✓", "Day", "Week", "Topic", "Problem", "No.", "Platform", "Difficulty", "Status"].map((c, i) => (
                <th key={c} style={{
                  width: [32,42,52,170,260,80,76,82,72][i],
                  padding: "4px 6px", background: "#f2f2f2",
                  border: "1px solid #d0d0d0", fontSize: 12, fontWeight: 700,
                  color: "#333", textAlign: "center", borderBottom: "2px solid #bdbdbd",
                }}>{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((row, i) => {
              const rowBg = row.isDone ? "#e2efda" : i % 2 === 0 ? "#fff" : "#f9f9f9";
              return (
                <tr key={row.key} style={{ background: rowBg }}>
                  <td style={{ width: 32, textAlign: "center", fontSize: 11, color: "#999", borderRight: "1px solid #d0d0d0", background: "#f2f2f2", padding: "3px 4px", borderBottom: "1px solid #e8e8e8" }}>
                    {i + 2}
                  </td>
                  <td style={{ textAlign: "center", borderBottom: "1px solid #e8e8e8", borderRight: "1px solid #e8e8e8" }}>
                    <input type="checkbox" checked={row.isDone} onChange={() => toggle(row.key)}
                      style={{ cursor: "pointer", accentColor: "#217346", width: 14, height: 14 }} />
                  </td>
                  <td style={{ textAlign: "center", fontWeight: 600, color: "#333", borderBottom: "1px solid #e8e8e8", borderRight: "1px solid #e8e8e8", padding: "4px 6px" }}>{row.day}</td>
                  <td style={{ textAlign: "center", borderBottom: "1px solid #e8e8e8", borderRight: "1px solid #e8e8e8", padding: "3px 6px" }}>
                    <span style={{ background: weekBg[row.week], color: weekColors[row.week], border: `1px solid ${weekColors[row.week]}50`, padding: "2px 8px", borderRadius: 2, fontSize: 11, fontWeight: 700 }}>
                      W{row.week}
                    </span>
                  </td>
                  <td style={{ padding: "4px 8px", color: "#333", borderBottom: "1px solid #e8e8e8", borderRight: "1px solid #e8e8e8", fontSize: 12 }}>{row.topic}</td>
                  <td style={{ padding: "4px 8px", fontWeight: row.isDone ? 400 : 500, textDecoration: row.isDone ? "line-through" : "none", color: row.isDone ? "#999" : "#1a1a1a", borderBottom: "1px solid #e8e8e8", borderRight: "1px solid #e8e8e8", fontSize: 12 }}>{row.problem}</td>
                  <td style={{ textAlign: "center", color: "#1565c0", fontSize: 12, borderBottom: "1px solid #e8e8e8", borderRight: "1px solid #e8e8e8", padding: "4px 6px", fontFamily: "monospace" }}>{row.number}</td>
                  <td style={{ textAlign: "center", borderBottom: "1px solid #e8e8e8", borderRight: "1px solid #e8e8e8", padding: "3px 6px" }}>
                    <span style={{ background: row.platform === "LC" ? "#fff7e6" : "#e8f5e9", color: row.platform === "LC" ? "#e65100" : "#1b5e20", border: `1px solid ${row.platform === "LC" ? "#ffcc80" : "#a5d6a7"}`, padding: "2px 7px", borderRadius: 2, fontSize: 11, fontWeight: 700 }}>
                      {row.platform}
                    </span>
                  </td>
                  <td style={{ textAlign: "center", borderBottom: "1px solid #e8e8e8", borderRight: "1px solid #e8e8e8", padding: "3px 6px" }}>
                    <span style={{ ...levelStyle[row.level], padding: "2px 8px", borderRadius: 2, fontSize: 11 }}>{row.level}</span>
                  </td>
                  <td style={{ textAlign: "center", fontWeight: 600, fontSize: 11, color: row.isDone ? "#276221" : "#999", borderBottom: "1px solid #e8e8e8", padding: "4px 6px" }}>
                    {row.isDone ? "✅ Done" : "⬜ Todo"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Status bar */}
      <div style={{ background: "#217346", color: "#fff", padding: "4px 14px", borderRadius: "0 0 4px 4px", display: "flex", gap: 24, fontSize: 11 }}>
        <span>Showing: {filtered.length} rows</span>
        <span>Easy: {rows.filter(r => r.level === "Easy").length}</span>
        <span>Medium: {rows.filter(r => r.level === "Medium").length}</span>
        <span>Hard: {rows.filter(r => r.level === "Hard").length}</span>
        <span style={{ marginLeft: "auto" }}>💾 Progress auto-saved</span>
      </div>
    </div>
  );
}