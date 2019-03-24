/**
 * Created by adam on 24/03/19.
 */
({
    updateValue : function(component, event, helper) {
        var val = component.find("myInput").getElement().value;
        component.set("v.greeting", val);
    }
})