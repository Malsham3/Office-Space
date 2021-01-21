import axios from "axios";

export default {
  // Gets all notes
  getNotes: function() {
    return axios.get("/api/notes");
  },
  // Gets the note with the given id
  getNote: function(id) {
    return axios.get("/api/notes/" + id);
  },
  // Deletes the note with the given id
  deleteNote: function(id) {
    return axios.delete("/api/notes/" + id);
  },
  // Saves a note to the database
  saveNote: function(noteData) {
    return axios.post("/api/notes", postData);
  },

  // Gets all leads
  getLeads: function() {
    return axios.get("/api/leads");
  },
  // Gets the lead with the given id
  getLead: function(id) {
    return axios.get("/api/leads/" + id);
  },
  // Deletes the leads with the given id
  deleteLead: function(id) {
    return axios.delete("/api/leads/" + id);
  },
  // Saves a lead to the database
  saveLead: function(leadData) {
    return axios.post("/api/leads", leadData);
  }
}