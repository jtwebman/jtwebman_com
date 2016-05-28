defmodule JtwebmanCom.PageController do
  use JtwebmanCom.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
