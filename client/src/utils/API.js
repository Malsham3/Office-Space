import axios from "axios";

export default {
  // Gets all notes
  getNotes: function () {
    return axios.get("/api/note");
  },
  // Gets the note with the given id
  getNote: function (id) {
    return axios.get("/api/note/" + id);
  },
  // Deletes the note with the given id
  deleteNote: function (id) {
    return axios.delete("/api/note/" + id);
  },
  // Saves a note to the database
  saveNote: function (noteData) {
    return axios.post("/api/note", noteData);
  },
  // Updates a note to the database with the given up
  updateNote: function(id, noteData){
    return axios.put("/api/note/" + id, noteData)
  },

  // Gets all leads
  getLeads: function () {
    return axios.get("/api/leads");
  },
  // Gets the lead with the given id
  getLead: function (id) {
    return axios.get("/api/leads/" + id);
  },
  // Deletes the leads with the given id
  deleteLead: function (id) {
    return axios.delete("/api/leads/" + id);
  },
  // Saves a lead to the database
  saveLead: function (leadData) {
    return axios.post("/api/leads", leadData);
  },

  updateLead: function(id, leadData){
    return axios.put("/api/leads/" + id, leadData)
  }
};
