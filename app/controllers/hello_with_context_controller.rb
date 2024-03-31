class HelloWithContextController < ApplicationController
  layout "hello_with_context"

  def index
    @hello_with_context_props = { message: "Stranger" }
  end
end
