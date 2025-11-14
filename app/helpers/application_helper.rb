module ApplicationHelper
  def active_nav_class(path, anchor = nil)
    if anchor.present?
      'active-menu' if request.fullpath.include?("#{path}##{anchor}")
    else
      'active-menu' if current_page?(path)
    end
  end
end
