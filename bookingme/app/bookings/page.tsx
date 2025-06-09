'use client'

import Image from "next/image"
import { useState } from "react"

export default function BookingsPage() {
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("All")

  
  const rooms = [
    {
      id: 1,
      number: "402",
      capacity: 60,
      resources: ["Projector", "Whiteboard", "Screen"],
      image: "/bookingme/public/confrence.jpg",
    },
     {
      id: 1,
      number: "402",
      capacity: 60,
      resources: ["Projector", "Whiteboard", "Screen"],
      image: "/room1.jpg",
    },
     {
      id: 1,
      number: "402",
      capacity: 60,
      resources: ["Projector", "Whiteboard", "Screen"],
      image: "/room1.jpg",
    },
     {
      id: 1,
      number: "402",
      capacity: 60,
      resources: ["Projector", "Whiteboard", "Screen"],
      image: "/room1.jpg",
    },
  
  ]

  const filteredRooms = rooms.filter(room =>
    room.number.includes(search) &&
    (filter === "All" || room.resources.includes(filter))
  )

  return (
    <main className="p-4 space-y-6">
      <h1 className="text-2xl font-bold">Room Allocation</h1>

      {/* Search and Filter */}
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Search rooms"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="All">All Resources</option>
          <option value="Projector">Projector</option>
          <option value="Whiteboard">Whiteboard</option>
          <option value="Screen">Screen</option>
        </select>
      </div>

      {/* Room List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRooms.map((room) => (
          <div
            key={room.id}
            className="border rounded-lg p-4 shadow-sm bg-white"
          >
            <Image
              src={room.image}
              alt={`Room ${room.number}`}
              width={300}
              height={200}
              className="rounded mb-2 object-cover"
            />
            <p><strong>Room:</strong> {room.number}</p>
            <p><strong>Capacity:</strong> {room.capacity}</p>
            <p><strong>Resources:</strong> {room.resources.join(", ")}</p>
            <button className="mt-2 px-4 py-1 bg-blue-500 text-white rounded">
              View
            </button>
          </div>
        ))}
      </div>
    </main>
  )
}
