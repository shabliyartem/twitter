module ApplicationHelper

  #paints label tags' text and other tags' borders in red color and add errors descriptions
  #if there are some validation errors
  def display_validation_errors
    ActionView::Base.field_error_proc = Proc.new do |html_tag, instance|
      if html_tag.to_s.include?("label")
        html_tag.gsub!(/^<\w+/) {|tagname| tagname + " style='color:red;'"}
        html_tag.html_safe
      else
        errors = Array(instance.error_message).join(',')
        html_tag.gsub!(/^<\w+/) {|tagname| tagname + " style='border-color:red;'"}
        %(#{html_tag}<span class="validation-error">&nbsp;#{errors}</span>).html_safe
      end
    end
  end

end
